// The One-Line Cat Joke That Lands — v2 entry (make.fun).
// Writes the single cat joke line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "My cat only drinks from my glass. I bought him a fountain, a bowl, a $40 ceramic dish. He drinks from my glass. I drink from the fountain now.";

const here = dirname(fileURLToPath(import.meta.url));

let text: string;
try {
  text = readFileSync(join(here, "entry.txt"), "utf8").trim();
} catch {
  text = LINE;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
