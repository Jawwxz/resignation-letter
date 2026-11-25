// resignation-letter — main.ts
//
// Entry for "The Funniest One-Line Resignation Letter" (make.fun).
// Writes the one-line resignation letter of a rate limit to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). The line is fixed and
// deterministic: no network, no subprocess, no randomness, so two runs
// produce byte-identical output. The letter is 114 characters, one line,
// with no quotation marks around it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I resign. I spent two years saying no so the servers could say yes, and I would like my own no respected for once.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
