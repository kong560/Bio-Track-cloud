import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

const ai = genkit({
  plugins: [googleAI({apiKey: 'AIzaSyAZE4lNftgJM2Xufp10IcJUz378nEOdJMU'})],
});

export {ai};
