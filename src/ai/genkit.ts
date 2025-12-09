import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not defined in environment variables');
}

const ai = genkit({
  plugins: [googleAI({apiKey: process.env.GEMINI_API_KEY})],
});

export {ai};
