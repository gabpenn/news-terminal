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
const SPORTY = /espn\.com|\/sports?[\/.]|football|soccer|\/nba|\/nfl|ole\.com\.ar|tycsports/i;
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
    headers: { "User-Agent": "Mozilla/5.0 (compatible; ZondaWire/0.2)" },
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
    if (t > now) t = now; // algunos medios publican horas adelantadas: nunca puede ser del futuro
    return { t, title, link, source: f.name, region: f.region, topic: SPORTY.test(f.url) ? "Sports" : topicOf(title) };
  }).filter((i) => i.title && i.link && !isNaN(i.t) && i.t > now - 86400000 && !/^clima hoy|pron[oó]stico del tiempo|hor[oó]scopo|\b(horoscope|recipes?|kardashian|coupons?|best deals|crossword|wordle|quiz|celebrity|red carpet|gift guide)\b/i.test(i.title));
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


const SB = "https://qfdliwiohllkujbjonoz.supabase.co";

// Un feed por medio primero (variedad), con 3 medios argentinos adelante.
function orderedFeeds() {
  const by = {};
  F.forEach((f) => (by[f.name] = by[f.name] || []).push(f));
  let order = [];
  for (let i = 0, any = true; any; i++) { any = false; for (const k in by) if (by[k][i]) { order.push(by[k][i]); any = true; } }
  const TOP = ["Infobae", "Clarín", "Ámbito"];
  order = [...order.filter((f) => TOP.includes(f.name)), ...order.filter((f) => !TOP.includes(f.name))];
  return order;
}
function pickFeeds() { return orderedFeeds().slice(0, LIMIT); }

// Recolector: corre solo cada minuto, lee los medios y guarda las noticias en Supabase.
// Tablero automatico (opcional): si definis la variable BOARD_CSV_URL en Cloudflare, cada minuto se lee ese CSV
// (por ejemplo una hoja de Google publicada como CSV) y se copia al evento fijado activo.
// Formato: una fila por linea: nombre,valor,bancas,imagen   y filas de datos extra: _counted,63   _source,Fuente   _unit,%
function csvLine(l) {
  const o = []; let c = "", q = false;
  for (const ch of l) { if (ch === '"') q = !q; else if (ch === "," && !q) { o.push(c); c = ""; } else c += ch; }
  o.push(c); return o.map((x) => x.trim());
}
function parseBoard(t) {
  const b = { rows: [] };
  t.split(/\r?\n/).forEach((l) => {
    if (!l.trim()) return;
    const c = csvLine(l), n = c[0] || "";
    if (n.startsWith("_")) { b[n.slice(1).toLowerCase()] = (c[1] || "").slice(0, 80); return; }
    const v = parseFloat(c[1]);
    if (!n || isNaN(v) || b.rows.length >= 12) return;
    b.rows.push({ n: n.slice(0, 40), v, s: (c[2] || "").slice(0, 10), i: /^https:\/\//i.test(c[3] || "") ? c[3] : "" });
  });
  return b;
}
async function updateBoard(env, key) {
  const r = await fetch(env.BOARD_CSV_URL, { cf: { cacheTtl: 30, cacheEverything: true }, signal: AbortSignal.timeout(8000) });
  if (!r.ok) return;
  const b = parseBoard(await r.text());
  if (!b.rows.length) return;
  const cur = await (await fetch(SB + "/rest/v1/events?select=board&active=eq.true&limit=1", { headers: { apikey: key } })).json();
  if (!Array.isArray(cur) || !cur.length) return;
  const old = cur[0].board || {};
  const same = JSON.stringify([old.rows, old.counted, old.source, old.unit]) === JSON.stringify([b.rows, b.counted, b.source, b.unit]);
  if (same) return;
  b.updated = new Date().toISOString();
  await fetch(SB + "/rest/v1/events?active=eq.true", { method: "PATCH", headers: { apikey: key, "content-type": "application/json", prefer: "return=minimal" }, body: JSON.stringify({ board: b }) });
}

// Rotacion: en cada vuelta (1 por minuto) lee solo PER_RUN medios y la vuelta siguiente lee los proximos.
// Asi, con el plan gratis, se recorren TODOS los medios cada pocos minutos y las noticias van entrando de a tandas.
// Con el plan pago podes subir PER_RUN a 40 o mas.
const PER_RUN = 12;
async function collect(env, when) {
  const key = env.SUPABASE_SECRET_KEY;
  if (!key) return;
  const all = orderedFeeds();
  const n = Math.max(1, Math.ceil(all.length / PER_RUN));
  const k = Math.floor((when || Date.now()) / 60000) % n;
  const out = await pool(all.slice(k * PER_RUN, (k + 1) * PER_RUN), load, 6);
  const seen = new Set();
  const rows = out.flatMap((r) => (Array.isArray(r) ? r : []))
    .filter((i) => !seen.has(i.link) && seen.add(i.link))
    .map((i) => ({ link: i.link, title: i.title, source: i.source, region: i.region, topic: i.topic, published_at: new Date(i.t).toISOString() }));
  const h = { apikey: key, "content-type": "application/json", prefer: "resolution=ignore-duplicates,return=minimal" };
  for (let k = 0; k < rows.length; k += 300) {
    await fetch(SB + "/rest/v1/news?on_conflict=link", { method: "POST", headers: h, body: JSON.stringify(rows.slice(k, k + 300)) });
  }
  await fetch(SB + "/rest/v1/news?published_at=lt." + encodeURIComponent(new Date(Date.now() - 86400000).toISOString()), { method: "DELETE", headers: { apikey: key } });
  if (env.BOARD_CSV_URL) { try { await updateBoard(env, key); } catch (e) {} }
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(collect(env, event.scheduledTime));
  },
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === "/api/quotes") {
      const key = env.FINNHUB_KEY;
      const syms = (url.searchParams.get("s") || "").split(",").filter((x) => /^[a-z0-9.^=_:-]{1,20}$/i.test(x)).slice(0, 30);
      const q = {};
      if (key) {
        await Promise.all(syms.map(async (sym) => {
          try {
            if (sym.toLowerCase().startsWith("yh:")) {
              // futuros (oro, plata, petroleo) desde Yahoo
              const yr = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(sym.slice(3).toUpperCase()) + "?range=1d&interval=1d", { headers: { "User-Agent": "Mozilla/5.0 (compatible; ZondaWire/0.2)" }, cf: { cacheTtl: 30, cacheEverything: true }, signal: AbortSignal.timeout(6000) });
              const m = ((await yr.json()).chart.result[0] || {}).meta || {};
              if (m.regularMarketPrice > 0) q[sym.toLowerCase()] = { p: m.regularMarketPrice, o: m.chartPreviousClose || m.previousClose || m.regularMarketPrice };
              return;
            }
            const r = await fetch("https://finnhub.io/api/v1/quote?symbol=" + encodeURIComponent(sym.toUpperCase()) + "&token=" + key, { cf: { cacheTtl: 30, cacheEverything: true }, signal: AbortSignal.timeout(6000) });
            const d = await r.json();
            if (d && d.c > 0) q[sym.toLowerCase()] = { p: d.c, o: d.pc || d.o || d.c };
          } catch (e) {}
        }));
      }
      return Response.json({ q, updated: Date.now(), hasKey: !!key }, { headers: { "cache-control": "public, max-age=20" } });
    }
    if (url.pathname === "/api/chart") {
      // Historial para los graficos: 1d, 5d, 1m, 1y (fuente: Yahoo Finance, sin clave)
      const sym = (url.searchParams.get("s") || "").toUpperCase();
      const R = { "1d": ["1d", "5m", 60], "5d": ["5d", "15m", 300], "1m": ["1mo", "1h", 900], "1y": ["1y", "1d", 3600] }[url.searchParams.get("r") || "1d"];
      if (!/^[A-Z0-9.^=_-]{1,20}$/.test(sym) || !R) return new Response("bad request", { status: 400 });
      try {
        const r = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(sym) + "?range=" + R[0] + "&interval=" + R[1], { headers: { "User-Agent": "Mozilla/5.0 (compatible; ZondaWire/0.2)" }, cf: { cacheTtl: R[2], cacheEverything: true }, signal: AbortSignal.timeout(8000) });
        const c = (await r.json()).chart.result[0];
        const ts = c.timestamp || [], cl = (c.indicators.quote[0] || {}).close || [];
        let t = [], p = [];
        for (let i = 0; i < ts.length; i++) if (cl[i] != null) { t.push(ts[i]); p.push(+cl[i].toFixed(4)); }
        const step = Math.ceil(t.length / 240);
        if (step > 1) { const t2 = [], p2 = []; for (let i = 0; i < t.length; i += step) { t2.push(t[i]); p2.push(p[i]); } if (t2[t2.length - 1] !== t[t.length - 1]) { t2.push(t[t.length - 1]); p2.push(p[p.length - 1]); } t = t2; p = p2; }
        const m = c.meta || {};
        return Response.json({ t, p, prev: m.chartPreviousClose || null, cc: m.currency || "", ex: m.exchangeName || "" }, { headers: { "cache-control": "public, max-age=" + R[2] } });
      } catch (e) { return Response.json({ err: 1 }); }
    }
    if (url.pathname === "/api/ar") {
      // Dolar y riesgo pais de Argentina (fuentes publicas gratuitas). Si una falla, simplemente no aparece.
      const out = {};
      try {
        const r = await fetch("https://dolarapi.com/v1/dolares", { cf: { cacheTtl: 60, cacheEverything: true }, signal: AbortSignal.timeout(6000) });
        const a = await r.json();
        if (Array.isArray(a)) out.fx = a.filter((x) => ["oficial", "blue", "bolsa", "contadoconliqui"].includes(x.casa) && x.venta > 0).map((x) => ({ k: x.casa, b: x.compra, s: x.venta, t: x.fechaActualizacion }));
      } catch (e) {}
      try {
        const r = await fetch("https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo", { cf: { cacheTtl: 300, cacheEverything: true }, signal: AbortSignal.timeout(6000) });
        const d = await r.json();
        if (d && d.valor > 0) out.risk = { v: d.valor, d: d.fecha };
      } catch (e) {}
      return Response.json(out, { headers: { "cache-control": "public, max-age=60" } });
    }
    if (url.pathname !== "/api/news") return new Response("Not found", { status: 404 });
    const list = pickFeeds();
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
