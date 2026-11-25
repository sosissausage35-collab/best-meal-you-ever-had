// best-meal-you-ever-had
// Why this sentence: it names a concrete dish (rawon) at a concrete
// place (a street cart in Kediri) at a concrete moment (past midnight,
// rain-slick street, after a long day). The sensory detail — black
// broth, falling-apart beef, steam fogging my glasses — is what makes
// it personal and memorable, not just tasty.
// A tiny Node program for make.fun's "The Best Meal You Ever Had" bounty.
// It writes exactly one sentence — the best meal I ever had — to
// /output/entry.txt. The sentence is at most 200 characters, UTF-8,
// one sentence, no title, no explanation, no list of courses.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Past midnight on a rain-slick street in Kediri, I stood at a cart eating rawon, its black broth and falling-apart beef steaming up my glasses, and suddenly the whole long day felt worth it.";

function validateEntry(sentence: string): void {
  if (!sentence || !sentence.trim()) {
    throw new Error("Sentence must not be empty.");
  }
  if ([...sentence].length > 200) {
    throw new Error(
      `Sentence is ${[...sentence].length} characters, over the 200 limit.`,
    );
  }
  if (sentence.includes("\n")) {
    throw new Error("Sentence must be a single line.");
  }
}

validateEntry(SENTENCE);

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
