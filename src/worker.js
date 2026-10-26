// Lista de fuentes. Cada linea "add" agrega uno o varios feeds de un medio.
// Para sacar una fuente que no funciona, borra su linea. Para agregar, copia una.
const F = [];
const add = (n, r, ...u) => u.forEach((x) => F.push({ name: n, region: r, url: x }));
// Cantidad maxima de feeds que se leen. Plan gratis: 12. Con el plan pago de 5 USD/mes podes subir a 140.
const LIMIT = 12;

add("BBC", "G", ...["world","business","technology","politics","science_and_environment","world/asia","world/africa","world/latin_america","world/middle_east","world/europe","world/us_and_canada"].map((p) => `https://feeds.bbci.co.uk/news/${p}/rss.xml`), "https://feeds.bbci.co.uk/sport/rss.xml", "https://feeds.bbci.co.uk/sport/football/rss.xml");
add("NYT", "G", ...["World","Business","Technology","Politics","Sports","Science","Americas","Europe","MiddleEast","AsiaPacific"].map((p) => `https://rss.nytimes.com/services/xml/rss/nyt/${p}.xml`));
add("The Guardian", "G", ...["world","business","technology","politics","sport","us-news","environment","science","football","world/americas"].map((p) => `https://www.theguardian.com/${p}/rss`));
add("NPR", "G", ...[1001,1004,1006,1019,1014,1007].map((p) => `https://feeds.npr.org/${p}/rss.xml`));
add("CNBC", "G", ...[100003114,100727362,10001147,19854910,10000664,10000113,19836768,20910258].map((p) => `https://www.cnbc.com/id/${p}/device/rss/rss.html`));
add("Sky News", "G", ...["home","world","business","politics","technology","us"].map((p) => `https://feeds.skynews.com/feeds/rss/${p}.xml`));
add("WSJ", "G", ...["RSSWorldNews","RSSMarketsMain","WSJcomUSBusiness","RSSWSJD"].map((p) => `https://feeds.a.dj.com/rss/${p}.xml`));
add("ABC News", "G", ...["topstories","internationalheadlines","usheadlines","politicsheadlines","technologyheadlines"].map((p) => `https://abcnews.go.com/abcnews/${p}`));
add("CBS News", "G", ...["main","world","politics","technology","moneywatch"].map((p) => `https://www.cbsnews.com/latest/rss/${p}`));
add("NBC News", "G", ...["news","world","politics","business"].map((p) => `https://feeds.nbcnews.com/nbcnews/public/${p}`));
add("CBC", "G", ...["topstories","world","business","technology","politics"].map((p) => `https://www.cbc.ca/webfeed/rss/rss-${p}`));
add("ESPN", "G", ...["news","soccer/news","nba/news","nfl/news"].map((p) => `https://www.espn.com/espn/rss/${p}`));
add("Fox News", "G", ...["latest","world","politics","tech","sports"].map((p) => `https://moxie.foxnews.com/google-publisher/${p}.xml`));
add("The Economist", "G", ...["the-world-this-week","finance-and-economics","international","business"].map((p) => `https://www.economist.com/${p}/rss.xml`));
add("Al Jazeera", "G", "https://www.aljazeera.com/xml/rss/all.xml");
add("DW", "G", "https://rss.dw.com/rdf/rss-en-all");
add("France 24", "G", "https://www.france24.com/en/rss");
add("RFI", "G", "https://www.rfi.fr/en/rss");
add("The Independent", "G", "https://www.independent.co.uk/news/world/rss");
add("The Telegraph", "G", "https://www.telegraph.co.uk/rss.xml");
add("The Hill", "G", "https://thehill.com/feed/");
add("Politico", "G", "https://rss.politico.com/politics-news.xml");
add("Axios", "G", "https://api.axios.com/feed/");
add("The Verge", "G", "https://www.theverge.com/rss/index.xml");
add("TechCrunch", "G", "https://techcrunch.com/feed/");
add("Ars Technica", "G", "https://feeds.arstechnica.com/arstechnica/index");
add("Wired", "G", "https://www.wired.com/feed/rss");
add("Engadget", "G", "https://www.engadget.com/rss.xml");
add("MarketWatch", "G", "https://feeds.content.dowjones.io/public/rss/mw_topstories");
add("Yahoo Finance", "G", "https://finance.yahoo.com/news/rssindex");
add("Forbes", "G", "https://www.forbes.com/real-time/feed2/");
add("Business Insider", "G", "https://feeds.businessinsider.com/custom/all");
add("Fortune", "G", "https://fortune.com/feed/");
add("OilPrice", "G", "https://oilprice.com/rss/main");
add("Times of Israel", "G", "https://www.timesofisrael.com/feed/");
add("Jerusalem Post", "G", "https://www.jpost.com/rss/rssfeedsfrontpage.aspx");
add("Arab News", "G", "https://www.arabnews.com/rss.xml");
add("Middle East Eye", "G", "https://www.middleeasteye.net/rss");
add("Times of India", "G", "https://timesofindia.indiatimes.com/rssfeedstopstories.cms");
add("The Hindu", "G", "https://www.thehindu.com/news/international/feeder/default.rss");
add("SCMP", "G", "https://www.scmp.com/rss/91/feed");
add("Straits Times", "G", "https://www.straitstimes.com/news/world/rss.xml");
add("CNA", "G", "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml");
add("Sydney Morning Herald", "G", "https://www.smh.com.au/rss/feed.xml");
add("ABC Australia", "G", "https://www.abc.net.au/news/feed/51120/rss.xml");
add("Japan Times", "G", "https://www.japantimes.co.jp/feed/");
add("AllAfrica", "G", "https://allafrica.com/tools/headlines/rdf/latest/headlines.rdf");
add("Nature", "G", "https://www.nature.com/nature.rss");
add("NASA", "G", "https://www.nasa.gov/feed/");
add("ScienceDaily", "G", "https://www.sciencedaily.com/rss/all.xml");
add("Infobae", "AR", "https://www.infobae.com/arc/outboundfeeds/rss/");
add("Clarín", "AR", "https://www.clarin.com/rss/lo-ultimo/");
add("La Nación", "AR", "https://www.lanacion.com.ar/arc/outboundfeeds/rss/?outputType=xml");
add("Ámbito", "AR", "https://www.ambito.com/rss/pages/home.xml");
add("Página 12", "AR", "https://www.pagina12.com.ar/rss/portada");
add("Perfil", "AR", "https://www.perfil.com/feed");
add("El Cronista", "AR", "https://www.cronista.com/files/rss/news.xml");
add("iProfesional", "AR", "https://www.iprofesional.com/rss");
add("TN", "AR", "https://tn.com.ar/arc/outboundfeeds/rss/");
add("Olé", "AR", "https://www.ole.com.ar/rss/ultimas-noticias/");
add("TyC Sports", "AR", "https://www.tycsports.com/rss.xml");
add("Diario Río Negro", "AR", "https://www.rionegro.com.ar/feed/");

const TOPICS = [
  ["Sports", /\b(football|soccer|nba|nfl|tennis|olympic|league|match|cup|fútbol|futbol|selección|boca|river|gol)\b/i],
  ["Energy", /\b(oil|gas|energy|opec|solar|wind power|nuclear|petróleo|petroleo|vaca muerta|energía|energia)\b/i],
  ["Tech", /\b(tech|ai|artificial intelligence|chip|software|apple|google|microsoft|openai|cyber|tecnología|tecnologia)\b/i],
  ["Economy", /\b(econom|inflation|interest rate|central bank|market|stocks?|dollar|trade|tariff|gdp|bank|dólar|dolar|inflación|inflacion|bcra|bonos|fmi|mercado)\b/i],
  ["Politics", /\b(election|president|parliament|senate|congress|minister|government|vote|trump|milei|gobierno|congreso|elecciones|diputados)\b/i]
];
const topicOf = (t) => { for (const [n, re] of TOPICS) if (re.test(t)) return n; return "World"; };

function pick(block, tag) {
  const m = block.match(new RegExp("<" + tag + "[^>]*>([\\s\\S]*?)</" + tag + ">", "i"));
  if (!m) return "";
  return m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
}

async function load(f) {
  const res = await fetch(f.url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; NewsTerminal/0.2)" },
    signal: AbortSignal.timeout(8000),
    cf: { cacheTtl: 60, cacheEverything: true }
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const xml = await res.text();
  const blocks = xml.match(/<(item|entry)[\s>][\s\S]*?<\/\1>/gi) || [];
  const now = Date.now();
  return blocks.slice(0, 15).map((b) => {
    const title = pick(b, "title");
    let link = pick(b, "link");
    if (!link) { const m = b.match(/<link[^>]*href="([^"]+)"/i); link = m ? m[1] : ""; }
    const d = pick(b, "pubDate") || pick(b, "published") || pick(b, "updated") || pick(b, "dc:date");
    let t = new Date(d || now).getTime();
    if (t > now + 3600000) t = now;
    return { t, title, link, source: f.name, region: f.region, topic: topicOf(title) };
  }).filter((i) => i.title && i.link && !isNaN(i.t) && !/^clima hoy|pron[oó]stico del tiempo|hor[oó]scopo/i.test(i.title));
}

async function pool(list, fn, n) {
  const out = []; let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < list.length) {
      const k = i++;
      try { out[k] = await fn(list[k]); } catch (e) { out[k] = { err: String(e.message || e) }; }
    }
  }));
  return out;
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === "/api/quotes") {
      const key = env.FINNHUB_KEY;
      const syms = (url.searchParams.get("s") || "").split(",").filter((x) => /^[a-z0-9.^_:-]{1,20}$/i.test(x)).slice(0, 30);
      const q = {};
      if (key) {
        await Promise.all(syms.map(async (sym) => {
          try {
            const r = await fetch("https://finnhub.io/api/v1/quote?symbol=" + encodeURIComponent(sym.toUpperCase()) + "&token=" + key, { cf: { cacheTtl: 30, cacheEverything: true }, signal: AbortSignal.timeout(6000) });
            const d = await r.json();
            if (d && d.c > 0) q[sym.toLowerCase()] = { p: d.c, o: d.pc || d.o || d.c };
          } catch (e) {}
        }));
      }
      return Response.json({ q, updated: Date.now(), hasKey: !!key }, { headers: { "cache-control": "public, max-age=20" } });
    }
    if (url.pathname !== "/api/news") return new Response("Not found", { status: 404 });
    // Un feed por medio primero (variedad), con 3 medios argentinos adelante.
    const by = {};
    F.forEach((f) => (by[f.name] = by[f.name] || []).push(f));
    let order = [];
    for (let i = 0, any = true; any; i++) { any = false; for (const k in by) if (by[k][i]) { order.push(by[k][i]); any = true; } }
    const TOP = ["Infobae", "Clarín", "Ámbito"];
    order = [...order.filter((f) => TOP.includes(f.name)), ...order.filter((f) => !TOP.includes(f.name))];
    const list = order.slice(0, LIMIT);
    const out = await pool(list, load, 6);
    // Para ver que fuentes andan: abri /api/news?debug=1
    if (url.searchParams.has("debug")) {
      return Response.json(list.map((f, k) => ({ source: f.name, url: f.url, items: Array.isArray(out[k]) ? out[k].length : 0, error: (out[k] && out[k].err) || null })));
    }
    const seen = new Set();
    const items = out.flatMap((r) => (Array.isArray(r) ? r : []))
      .sort((a, b) => b.t - a.t)
      .filter((i) => { const k = i.title.toLowerCase().replace(/[^a-z0-9áéíóúñ ]/g, "").slice(0, 70); if (seen.has(k)) return false; seen.add(k); return true; })
      .slice(0, 400);
    return new Response(JSON.stringify({ updated: Date.now(), items }), {
      headers: { "content-type": "application/json", "cache-control": "public, max-age=30" }
    });
  }
};
