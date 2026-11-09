import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const JOKE =
  "My agent fixed a bug it invented in a file that never existed. Then it wrote tests for it. The tests pass.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Output must be deterministic: identical bytes on every run, so no timestamps or trailing newline.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), Buffer.from(JOKE, "utf8"));
