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
const NOISE = /\b(?:celebrit(?:y|ies)|kardashian|jenner|taylor swift|beyonc[eé]|selena gomez|bad bunny|oscars?|grammys?|emmys?|golden globes?|box office|movie|film review|tv series|tv show|reality tv|love island|bachelor|dancing with the stars|trailer|singer|rapper|actor|actress|royal family|king charles|prince (?:william|harry)|princess (?:kate|diana)|meghan markle|duchess|wedding|engaged|dating|divorce|pregnan|baby bump|fashion|makeup|skincare|recipes?|diet|weight loss|workout|horoscope|zodiac|lottery|powerball|mega millions|jackpot|sportsbook|betting|parlay|best bets|prop bets|fantasy (?:football|baseball|basketball)|nfl|nba|mlb|nhl|ufc|wwe|premier league|champions league|world cup|touchdown|quarterback|playoffs|super bowl|halloween|thanksgiving|black friday|cyber monday|prime day|best deals?|deals? of the day|coupons?|gift guide|buying guide|hands-on|best (?:phones?|laptops?|headphones|tvs?|earbuds|vacuum|mattress)|travel guide|vacation|cruise|obituary|dies at|dead at \d+|net worth|viral|tiktok star|influencer|podcast|concert|tour dates|album|lyrics|crossword|wordle|quiz|red carpet|gift guide)\b/i;
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
    return { t, title, link, source: f.name, region: f.region, topic: SPORTY.test(f.url) ? "Sports" : NOISE.test(title) ? "Entertainment" : topicOf(title) };
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
// ---------- Tablero automatico (resultados de elecciones) ----------
// Se configura con la variable BOARD_FEED_URL en Cloudflare. Acepta dos tipos de link:
//  1) El archivo oficial de la Comision Electoral de Israel (CSV por localidad, con columnas por lista). Se suman todas las localidades.
//  2) Un CSV simple (por ejemplo una hoja de Google publicada): una fila por lista: nombre,porcentaje,bancas,foto
//     y filas extra: _counted,63   _source,Fuente   _unit,%
// Corre cada 2 minutos (segundo cron) para no gastar el limite del plan gratis. Si algo no cuadra, NO pisa los datos que ya estan.
const DEF_NAMES = {
  // Letras de las boletas, Knesset 2026 (listado de Mako y Handled; "כן", "צבי" y "רץ" figuran en una sola fuente)
  "מחל": "Likud (Netanyahu)", "רק": "Together (Bennett)", "דרך": "Yashar (Eisenkot)", "אמת": "The Democrats (Golan)", "כן": "Blue and White (Gantz)",
  "ל": "Yisrael Beiteinu (Lieberman)", "ב": "Otzma Yehudit (Ben-Gvir)", "ט": "Religious Zionism + Zehut", "שס": "Shas", "ג": "United Torah Judaism",
  "עם": "Ra'am", "ודם": "Joint List", "ני": "Noam", "די": "Reservists and Economic Party", "פה": "Ani VeAta", "רץ": "Hakahal", "צבי": "Ahi Movement",
  "ד": "Partnership for Everyone", "צף": "Pirate Party", "ך": "Amcha Yisrael", "י": "Israel First", "ה": "Garden of Eden", "קה": "Women's Voice",
  "בד": "Together We Will Succeed", "קץ": "Just Law", "נף": "Shema", "קך": "New Order", "זך": "Haredi Public", "זץ": "Eternal Covenant",
  "נקי": "Fixing the Electoral System", "יק": "Biblical Bloc", "ז": "Social Security", "בקר": "Dawn's Light", "נץ": "Personal Security",
  "נר": "The Color Black", "בי": "House of Israel Junction", "ק": "Tkuma", "צדק": "Sharshar for Love and Unity"
};
function csvLine(l) {
  if (l.indexOf('"') < 0) return l.split(",").map((x) => x.trim());
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
function decodeFeed(buf) {
  const u = new Uint8Array(buf);
  if (u.length > 1 && ((u[0] === 0xff && u[1] === 0xfe) || (u[0] === 0xfe && u[1] === 0xff))) {
    return new TextDecoder(u[0] === 0xff ? "utf-16le" : "utf-16be").decode(buf).replace(/^\uFEFF/, "");
  }
  if (u.length > 3 && u[1] === 0 && u[3] === 0) return new TextDecoder("utf-16le").decode(buf);
  let t = new TextDecoder("utf-8").decode(buf);
  if (t.includes("�") || !/[֐-׿]/.test(t)) {
    try { const t2 = new TextDecoder("windows-1255").decode(buf); if (/[֐-׿]/.test(t2)) t = t2; } catch (e) {}
  }
  return t.replace(/^﻿/, "");
}
// Reparto de bancas (D'Hondt entre las listas que pasan el piso de 3.25%). Es una proyeccion, no el reparto oficial.
function seatsFor(votes, total) {
  const ok = votes.map((v) => (total > 0 && v / total >= 0.0325 ? v : 0));
  const seats = votes.map(() => 0);
  for (let k = 0; k < 120; k++) {
    let best = -1, bq = 0;
    for (let i = 0; i < ok.length; i++) { if (!ok[i]) continue; const q = ok[i] / (seats[i] + 1); if (q > bq) { bq = q; best = i; } }
    if (best < 0) break;
    seats[best]++;
  }
  return seats;
}
// Devuelve { board } si es el archivo oficial, o null si no lo parece. Lanza Error si lo parece pero no cuadra.
function parseCec(text, names) {
  const lines = text.split(/\r?\n/);
  let hi = -1, head = null, vi = -1;
  for (let i = 0; i < Math.min(lines.length, 12); i++) {
    const c = csvLine(lines[i]);
    const k = c.findIndex((x) => /^(כשרים|valid)$/i.test(x));
    if (k >= 0) { hi = i; head = c; vi = k; break; }
  }
  if (hi < 0) return null;
  const codes = head.slice(vi + 1);
  const nC = codes.length;
  let sums = new Array(nC).fill(0), totArr = null, valid = 0, totValid = 0, rowsN = 0;
  // Lectura rapida caracter por caracter (el plan gratis solo permite ~10 ms de procesador)
  let pos = 0; for (let k = 0; k <= hi; k++) { const e = text.indexOf("\n", pos); if (e < 0) { pos = text.length; break; } pos = e + 1; }
  const L = text.length;
  let col = 0, n = 0, q = false, cell0 = "", isTot = false, rowValid = 0, got = false, start = true;
  const endCell = () => {
    if (col === 0) { isTot = /סה.?כ|total/i.test(cell0); if (isTot && !totArr) totArr = new Array(nC).fill(0); }
    else if (col === vi) { rowValid = n; if (isTot) totValid = n; else { valid += n; if (n) rowsN++; } }
    else if (col > vi && col - vi - 1 < nC) { if (isTot) totArr[col - vi - 1] = n; else sums[col - vi - 1] += n; }
    col++; n = 0; start = true;
  };
  for (let p = pos; p < L; p++) {
    const ch = text.charCodeAt(p);
    if (q) {
      if (ch === 34) { if (text.charCodeAt(p + 1) === 34) { p++; if (col === 0 && cell0.length < 40) cell0 += '"'; } else q = false; }
      else if (col === 0 && cell0.length < 40) cell0 += text[p];
      continue;
    }
    if (ch === 34 && start) { q = true; start = false; continue; }
    start = false;
    if (ch === 44) { endCell(); continue; }
    if (ch === 10) { if (got) endCell(); col = 0; n = 0; cell0 = ""; isTot = false; got = false; start = true; continue; }
    if (ch >= 48 && ch <= 57) { n = n * 10 + (ch - 48); got = true; if (col === 0 && cell0.length < 40) cell0 += text[p]; continue; }
    if (ch === 13 || ch === 32) { if (col === 0 && cell0.length < 40 && ch === 32) cell0 += " "; continue; }
    got = true; if (col === 0 && cell0.length < 40) cell0 += text[p];
  }
  if (got) endCell();
  if (totArr) { valid = totValid; sums = totArr; }
  const sumParties = sums.reduce((a, b) => a + b, 0);
  if (valid <= 0) throw new Error("no valid votes counted yet");
  if (sumParties < valid * 0.9 || sumParties > valid * 1.02) throw new Error("columns do not add up (" + sumParties + " vs " + valid + " valid votes)");
  const seats = seatsFor(sums, valid);
  let rows = codes.map((code, j) => ({ code, v: sums[j], s: seats[j] })).filter((x) => x.code && x.v > 0).sort((a, b) => b.v - a.v);
  const nParties = rows.length;
  const nm = (code) => (names && names[code]) || DEF_NAMES[code] || code;
  const top = rows.slice(0, 10).map((x) => ({ n: nm(x.code).slice(0, 40), v: Math.round((x.v / valid) * 1000) / 10, s: x.s ? String(x.s) : "", i: "" }));
  const rest = rows.slice(10).reduce((a, x) => a + x.v, 0);
  if (rest > 0) top.push({ n: "Others (" + (nParties - 10) + " lists)", v: Math.round((rest / valid) * 1000) / 10, s: "", i: "" });
  return { board: { rows: top, votes: valid, unit: "%", source: "Central Elections Committee, unofficial relay", note: "Seats are a projection (3.25% threshold), not official." }, msg: "official file: " + nParties + " lists, " + valid.toLocaleString("en-US") + " valid votes, " + rowsN + " places" };
}

// Lector de tablas de paginas web: busca la tabla con mas filas "nombre + porcentaje (o votos)".
function parseHtml(text, host) {
  if (!/<tr[\s>]/i.test(text)) return null;
  const t = text.slice(0, 250000);
  const clean = (x) => x.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<sup[\s\S]*?<\/sup>/gi, " ").replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;|&#34;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n)).replace(/\[\d+\]/g, "").replace(/\s+/g, " ").trim();
  const num = (x) => {
    x = (x || "").replace(/[−–]/g, "-").trim();
    if (/^\d{1,3}([.,\s]\d{3})+$/.test(x)) return parseFloat(x.replace(/[.,\s]/g, ""));
    const m = x.match(/^-?\d+(?:[.,]\d+)?/); return m ? parseFloat(m[0].replace(",", ".")) : NaN;
  };
  const BAD = /^(total|turnout|valid|invalid|blank|registered|electorate|votes|source|others?)\b/i;
  let best = null;
  const tables = t.split(/<table[\s>]/i).slice(1);
  for (const tb of tables) {
    const trs = tb.match(/<tr[\s\S]*?<\/tr>/gi) || [];
    if (trs.length < 3) continue;
    const grid = trs.map((r) => (r.match(/<t[dh][\s\S]*?<\/t[dh]>/gi) || []).map(clean));
    let nameI = -1, pctI = -1, seatI = -1, votesI = -1, start = 0;
    for (let h = 0; h < Math.min(4, grid.length); h++) {
      const g = grid[h];
      if (g.some((x) => /\d/.test(x) && !isNaN(num(x)))) continue;   // una fila con numeros es dato, no encabezado
      const a = g.findIndex((x) => /party|candidate|list|name|partido|candidato|lista|team|equipo/i.test(x));
      const b = g.findIndex((x) => /%|percent|share|porcentaje/i.test(x));
      const c = g.findIndex((x) => /seats?|mandates?|bancas|esca[ñn]os/i.test(x));
      const d = g.findIndex((x) => /^votes?$|votos/i.test(x));
      if (a >= 0 || b >= 0 || c >= 0 || d >= 0) { nameI = a; pctI = b; seatI = c; votesI = d; start = h + 1; break; }
    }
    const rows = [];
    for (let i = start; i < grid.length; i++) {
      const c = grid[i];
      if (c.length < 2) continue;
      let n = nameI >= 0 ? c[nameI] : "";
      if (!n) n = c.find((x) => x && /[A-Za-z֐-׿À-ɏ]{2}/.test(x) && isNaN(num(x)) && !/%/.test(x)) || "";
      if (!n || BAD.test(n)) continue;
      let p = NaN;
      if (pctI >= 0) p = num(c[pctI]);
      if (isNaN(p)) { const pc = c.find((x) => /^\d{1,3}(?:[.,]\d+)?\s?%$/.test(x)); if (pc) p = num(pc); }
      let vt = NaN;
      if (isNaN(p)) { if (votesI >= 0) vt = num(c[votesI]); if (isNaN(vt)) vt = Math.max(0, ...c.filter((x) => x !== n).map((x) => { const v = num(x); return /^\d{1,3}([.,\s]\d{3})+$/.test(x) ? v : NaN; }).filter((v) => !isNaN(v))) || NaN; }
      if (isNaN(p) && !(vt > 0)) continue;
      const se = seatI >= 0 ? num(c[seatI]) : NaN;
      rows.push({ n: n.slice(0, 40), p, vt, s: isNaN(se) ? "" : String(se) });
    }
    if (rows.length >= 2 && (!best || rows.length > best.length)) best = rows;
  }
  if (!best) return null;
  best = best.slice(0, 12);
  let votes = 0;
  if (best.every((r) => isNaN(r.p))) {
    const sum = best.reduce((a, r) => a + r.vt, 0); votes = sum;
    best.forEach((r) => { r.p = Math.round((r.vt / sum) * 1000) / 10; });
  }
  best = best.filter((r) => !isNaN(r.p)).sort((a, b) => b.p - a.p);
  if (best.length < 2) return null;
  const board = { rows: best.map((r) => ({ n: r.n, v: r.p, s: r.s, i: "" })), source: host, unit: "%" };
  if (votes) board.votes = votes;
  return { board, msg: "web table: " + best.length + " rows from " + host };
}
async function feedUpdate(env) {
  const key = env.SUPABASE_SECRET_KEY;
  if (!key) return;
  const H = { apikey: key, "content-type": "application/json" };
  const cur = await (await fetch(SB + "/rest/v1/events?select=id,board&active=eq.true&order=id.desc&limit=1", { headers: H })).json();
  if (!Array.isArray(cur) || !cur.length) return;
  const id = cur[0].id, old = cur[0].board || {};
  const url = (old.url && /^https:\/\//i.test(old.url) ? old.url : "") || env.BOARD_FEED_URL || env.BOARD_CSV_URL;
  if (!url) return;
  if (old.auto === false) return;   // pausado desde el panel de admin
  const every = Math.min(60, Math.max(2, +old.every || 2));
  const lf = old.feed;
  if (lf && lf.ok && lf.url === url && lf.at && Date.now() - Date.parse(lf.at) < every * 60000 - 30000) return;   // todavia no toca
  let res = null, err = "";
  try {
    const r = await fetch(url, { cf: { cacheTtl: 20, cacheEverything: true }, signal: AbortSignal.timeout(9000) });
    if (!r.ok) throw new Error("feed answered " + r.status);
    const text = decodeFeed(await r.arrayBuffer());
    res = parseCec(text, old.names || {});
    if (!res && /<tr[\s>]/i.test(text)) {
      let host = ""; try { host = new URL(url).hostname.replace(/^www\./, ""); } catch (e) {}
      res = parseHtml(text, host);
      if (!res) throw new Error("no results table found on that page (it may load its numbers with scripts) | " + text.length + " chars");
    }
    if (!res) {
      const b = parseBoard(text);
      if (!b.rows.length) throw new Error("file format not recognized | " + (r.headers.get("content-type") || "?") + " | " + text.length + " chars | starts: " + text.slice(0, 220).replace(/\s+/g, " "));
      res = { board: b, msg: "simple file: " + b.rows.length + " rows" };
    }
  } catch (e) { err = String(e && e.message || e).slice(0, 400); }
  const at = new Date().toISOString();
  let nb;
  if (res) nb = Object.assign({}, old, res.board, { updated: at, auto: true, feed: { ok: true, at, msg: res.msg, url } });
  else nb = Object.assign({}, old, { feed: { ok: false, at, msg: err, url } });
  const sig = (b) => JSON.stringify([b.rows, b.votes, b.source, b.counted, b.note, b.feed && b.feed.ok, b.feed && b.feed.msg]);
  if (sig(nb) === sig(old)) return;
  await fetch(SB + "/rest/v1/events?id=eq." + id, { method: "PATCH", headers: Object.assign({ prefer: "return=minimal" }, H), body: JSON.stringify({ board: nb }) });
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
}

export default {
  async scheduled(event, env, ctx) {
    if (event.cron === "*/2 * * * *") ctx.waitUntil(feedUpdate(env).catch(() => {}));
    else ctx.waitUntil(collect(env, event.scheduledTime));
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
