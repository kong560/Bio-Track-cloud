'use server'; // <-- VERY IMPORTANT for Next.js + Amplify

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error(" GEMINI_API_KEY is missing in environment variables");
  throw new Error("GEMINI_API_KEY is not defined");
}

export const ai = genkit({
  plugins: [googleAI({ apiKey })],
});
