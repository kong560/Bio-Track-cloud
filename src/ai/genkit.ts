import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/google-genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("⚠ GEMINI_API_KEY is missing. AI features will not work.");
}

export const ai = genkit({
  plugins: [googleAI({ apiKey })],
});
