import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My check-engine light has been on so long I've started using it as a night-light.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line with no line breaks");
}

if ((LINE.match(/\./g) ?? []).length !== 1) {
  throw new Error("Line must be a single sentence ending in one period");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
