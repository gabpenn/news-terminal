const FEEDS = [
  { name: "BBC", region: "GLOBAL", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "BBC Business", region: "GLOBAL", url: "https://feeds.bbci.co.uk/news/business/rss.xml" },
  { name: "Al Jazeera", region: "GLOBAL", url: "https://www.aljazeera.com/xml/rss/all.xml" },
  { name: "The Guardian", region: "GLOBAL", url: "https://www.theguardian.com/world/rss" },
  { name: "NPR", region: "GLOBAL", url: "https://feeds.npr.org/1001/rss.xml" },
  { name: "CNBC", region: "GLOBAL", url: "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114" },
  { name: "Infobae", region: "AR", url: "https://www.infobae.com/arc/outboundfeeds/rss/" },
  { name: "Clarín", region: "AR", url: "https://www.clarin.com/rss/lo-ultimo/" },
  { name: "La Nación", region: "AR", url: "https://www.lanacion.com.ar/arc/outboundfeeds/rss/?outputType=xml" },
  { name: "Ámbito", region: "AR", url: "https://www.ambito.com/rss/pages/home.xml" }
];

const TOPICS = [
  ["Sports", /\b(football|soccer|nba|nfl|tennis|olympic|league|match|cup|fútbol|futbol|selección|boca|river|gol)\b/i],
  ["Energy", /\b(oil|gas|energy|opec|solar|wind power|nuclear|petróleo|petroleo|vaca muerta|energía|energia)\b/i],
  ["Tech", /\b(tech|ai|artificial intelligence|chip|software|apple|google|microsoft|openai|cyber|tecnología|tecnologia)\b/i],
  ["Economy", /\b(econom|inflation|interest rate|central bank|market|stocks?|dollar|trade|tariff|gdp|bank|dólar|dolar|inflación|inflacion|bcra|bonos|fmi|mercado)\b/i],
  ["Politics", /\b(election|president|parliament|senate|congress|minister|government|vote|trump|milei|gobierno|congreso|elecciones|diputados)\b/i]
];

function topicOf(title) {
  for (const [name, re] of TOPICS) if (re.test(title)) return name;
  return "World";
}

function pick(block, tag) {
  const m = block.match(new RegExp("<" + tag + "[^>]*>([\\s\\S]*?)</" + tag + ">", "i"));
  if (!m) return "";
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .trim();
}

async function load(feed) {
  const res = await fetch(feed.url, {
    headers: { "User-Agent": "NewsTerminal/0.1 (headline reader)" },
    signal: AbortSignal.timeout(6000)
  });
  const xml = await res.text();
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  return blocks.slice(0, 25).map((b) => {
    const title = pick(b, "title");
    return {
      t: new Date(pick(b, "pubDate") || Date.now()).getTime(),
      title,
      link: pick(b, "link"),
      source: feed.name,
      region: feed.region,
      topic: topicOf(title)
    };
  }).filter((i) => i.title && i.link && !isNaN(i.t));
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (url.pathname !== "/api/news") return new Response("Not found", { status: 404 });
    const cache = caches.default;
    const key = new Request(url.origin + "/api/news");
    const hit = await cache.match(key);
    if (hit) return hit;
    const results = await Promise.allSettled(FEEDS.map(load));
    const items = results
      .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
      .sort((a, b) => b.t - a.t)
      .slice(0, 300);
    const res = new Response(JSON.stringify({ updated: Date.now(), items }), {
      headers: { "content-type": "application/json", "cache-control": "public, max-age=60" }
    });
    ctx.waitUntil(cache.put(key, res.clone()));
    return res;
  }
};
