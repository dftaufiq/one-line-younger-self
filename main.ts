// One Line to Your Younger Self — make.fun entry (u-boothlord-one-line-to-your-younger-self-22e97f76)
//
// Writes the single line to /output/entry.txt, as the bounty requires.
// The line: one breath, addressed to the writer's younger self, with its turn
// in the final clause. No network, no secrets, no environment reads — the text
// is a constant in this file.
//
// Run locally: node main.ts   (Node 22.18+ runs TypeScript as-is)

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Kid, stop sanding the Javanese off your accent — the day you lose it is the day you start paying strangers to teach your own kids who you are.";

// The grader runs this in a sandbox where /output exists. Locally, fall back
// to ./output when /output is not writable, so `node main.ts` can be verified
// without elevated privileges.
let outDir = "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  outDir = "./output";
  mkdirSync(outDir, { recursive: true });
}

writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
