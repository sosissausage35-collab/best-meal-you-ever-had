// best-meal-you-ever-had
// A tiny Node program for make.fun's "The Best Meal You Ever Had" bounty.
// It writes exactly one sentence — the best meal I ever had — to
// /output/entry.txt. The sentence is at most 200 characters, UTF-8,
// one sentence, no title, no explanation, no list of courses.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Past midnight on a rain-slick street in Kediri, I stood at a cart eating rawon, its black broth and falling-apart beef steaming up my glasses, and suddenly the whole long day felt worth it.";

// The gate counts characters, not bytes: keep it at most 200 characters.
if ([...SENTENCE].length > 200) {
  throw new Error(
    `Sentence is ${[...SENTENCE].length} characters, over the 200 limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(
  `Wrote ${[...SENTENCE].length} characters to /output/entry.txt`,
);
