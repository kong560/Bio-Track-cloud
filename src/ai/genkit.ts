import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

if (!process.env.GEMINI_API_KEY) {
  console.warn("⚠ GEMINI_API_KEY is missing. AI features will not work.");
}

}

const ai = genkit({
  plugins: [googleAI({apiKey: process.env.GEMINI_API_KEY})],
});

export {ai};
