import {config} from 'dotenv';
config();

import {start} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {genkit} from 'genkit';

import './ai-species-recognition';

genkit({
  plugins: [googleAI({apiKey: process.env.GEMINI_API_KEY})],
});

start();
