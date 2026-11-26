import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: the bug was hallucinated. the fix is real. probably. going to sleep now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
