import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync(new URL("../public/workspace.html", import.meta.url), "utf8");
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];
const inline = scripts.map((match) => match[1]).filter((source) => source.trim()).at(-1);
if (!inline) {
  console.error("No inline workspace script found.");
  process.exit(1);
}
try {
  new vm.Script(inline, { filename: "public/workspace.html:inline-script" });
  console.log("Workspace JavaScript syntax check passed.");
} catch (error) {
  console.error(error);
  process.exit(1);
}
