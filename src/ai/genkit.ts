import {ai} from '@genkit-ai/next';
import {googleAI} from '@genkit-ai/google-genai';

ai({
  plugins: [googleAI()],
});

export {ai};
