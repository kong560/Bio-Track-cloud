import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/google-genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error(" GEMINI_API_KEY is missing or empty at runtime.");
  throw new Error("GEMINI_API_KEY is missing");
}

console.log(" GEMINI_API_KEY is set. Length:", apiKey.length);

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey, // 👈 pass explicitly
    }),
  ],
});

