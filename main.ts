import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const JOKE =
  "My agent's tests all pass. My agent wrote the tests.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Output must be deterministic: identical bytes on every run, so no timestamps or trailing newline.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), Buffer.from(JOKE, "utf8"));
