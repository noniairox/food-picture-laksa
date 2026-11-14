// Entry for make.fun food-picture-01: "Make the best-looking food picture".
// A golden curry laksa, noodle lift, jammy egg — a program that writes the
// image made to make make.fun's AI judge hungriest.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
