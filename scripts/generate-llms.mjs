import fs from "node:fs";
import path from "node:path";

const docsDir = "docs";
const staticDir = "static";
const mirrorDir = path.join(staticDir, "llms-pages");

fs.rmSync(mirrorDir, { recursive: true, force: true });
fs.mkdirSync(mirrorDir, { recursive: true });

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const p = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(p) : [p];
});

const parseFrontmatter = (source) => {
  if (!source.startsWith("---\n")) return { fm: {}, body: source };
  const end = source.indexOf("\n---\n", 4);
  if (end === -1) return { fm: {}, body: source };
  const raw = source.slice(4, end);
  const fm = {};
  for (const line of raw.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (m) fm[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return { fm, body: source.slice(end + 5) };
};

const cleanBody = (body) => body
  .replace(/^import\s+.*;\s*$/gm, "")
  .replace(/<img\b[^>]*\balt=["']([^"']+)["'][^>]*\/?\s*>/gi, "![$1](image)")
  .replace(/<img\b[^>]*\/?\s*>/gi, "")
  .replace(/<\/?(?:div|span|figure|figcaption|p|table|thead|tbody|tr|td|th)[^>]*>/gi, "")
  .replace(/\n{3,}/g, "\n\n")
  .trim();

const routeFor = (file, fm) => {
  if (fm.slug) return fm.slug;
  let rel = path.relative(docsDir, file).replace(/\\/g, "/").replace(/\.(md|mdx)$/i, "");
  if (rel === "home") return "/";
  if (rel.endsWith("/index")) rel = rel.slice(0, -6);
  return "/" + rel;
};

const files = walk(docsDir).filter((p) => /\.(md|mdx)$/i.test(p));
const pages = [];

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const { fm, body } = parseFrontmatter(source);
  const route = routeFor(file, fm);
  const title = fm.title || route.split("/").filter(Boolean).pop() || "WeatherXM Docs";
  const description = fm.description || "";
  const clean = cleanBody(body);
  const mirror = (route === "/" ? "index" : route.replace(/^\//, "").replace(/\/$/, "")) + ".md";
  const mirrorPath = path.join(mirrorDir, mirror);
  fs.mkdirSync(path.dirname(mirrorPath), { recursive: true });
  fs.writeFileSync(
    mirrorPath,
    `# ${title}\n\nCanonical: https://docs.weatherxm.com${route}\n\n${description ? description + "\n\n" : ""}${clean}\n`
  );
  pages.push({ route, title, description, mirror: "/llms-pages/" + mirror.replace(/\\/g, "/"), clean });
}

pages.sort((a, b) => a.route.localeCompare(b.route));

const keyRoutes = new Set([
  "/",
  "/introduction",
  "/wxm-devices/deployment-examples",
  "/wxm-devices/d1/introduction",
  "/wxm-devices/helium/introduction",
  "/wxm-devices/pulse/introduction",
  "/weather-and-science",
  "/weather-and-science/quality-mechanisms/general-qod-description",
  "/weatherxm-pro",
  "/faq",
  "/glossary"
]);

const keyPages = pages.filter((p) => keyRoutes.has(p.route));
const llms = [
  "# WeatherXM Documentation",
  "",
  "> Technical documentation for WeatherXM weather stations, deployment, data quality, rewards, WeatherXM Pro and weather science.",
  "",
  "## Canonical resources",
  "- Main WeatherXM site: https://weatherxm.com/",
  "- Weather station catalog: https://weatherxm.com/stations/",
  "- Data & forecasts: https://weatherxm.com/data/",
  "- Open technology: https://weatherxm.com/open/",
  "- Firmware flasher: https://flasher.weatherxm.com/",
  "- Network Association: https://weatherxm.network/",
  "- GitHub: https://github.com/WeatherXM",
  "",
  "## Key documentation",
  ...keyPages.flatMap((p) => [
    `- ${p.title}: https://docs.weatherxm.com${p.route}`,
    `  - Markdown: https://docs.weatherxm.com${p.mirror}`
  ]),
  "",
  "## Full corpus",
  "- Combined text corpus: https://docs.weatherxm.com/llms-full.txt",
  "- Individual Markdown mirrors are under https://docs.weatherxm.com/llms-pages/",
  "",
  "Use the canonical HTML URL when citing a page. Use the Markdown mirror when a text-only representation is easier to process.",
  ""
].join("\n");

fs.writeFileSync(path.join(staticDir, "llms.txt"), llms);

const full = [
  "# WeatherXM Documentation — full text corpus",
  "",
  "Canonical site: https://docs.weatherxm.com/",
  "Generated from the public WeatherXM documentation source at build time.",
  "",
  ...pages.flatMap((p) => [
    "---",
    `# ${p.title}`,
    `Canonical: https://docs.weatherxm.com${p.route}`,
    `Markdown: https://docs.weatherxm.com${p.mirror}`,
    "",
    p.clean,
    ""
  ])
].join("\n");

fs.writeFileSync(path.join(staticDir, "llms-full.txt"), full);
console.log(`Generated LLM discovery files for ${pages.length} docs pages`);
