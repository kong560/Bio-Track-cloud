// This is an AI-powered tool to suggest potential species matches from uploaded images.

'use server';

/**
 * @fileOverview An AI agent to suggest species matches from uploaded images.
 *
 * - aiSpeciesRecognition - A function that handles the species recognition process.
 * - AiSpeciesRecognitionInput - The input type for the aiSpeciesRecognition function.
 * - AiSpeciesRecognitionOutput - The return type for the aiSpeciesRecognition function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSpeciesRecognitionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a species observation, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  additionalDetails: z.string().optional().describe('Any additional details about the observation.'),
});
export type AiSpeciesRecognitionInput = z.infer<typeof AiSpeciesRecognitionInputSchema>;

const AiSpeciesRecognitionOutputSchema = z.object({
  suggestedSpecies: z.array(z.string()).describe('An array of suggested species matches. Provide at least 3, if possible.'),
  confidenceLevels: z.array(z.number()).describe('An array of confidence levels (between 0.0 and 1.0) for each suggested species.'),
  justification: z.string().describe('A brief justification for the top suggested species match.'),
});
export type AiSpeciesRecognitionOutput = z.infer<typeof AiSpeciesRecognitionOutputSchema>;

export async function aiSpeciesRecognition(input: AiSpeciesRecognitionInput): Promise<AiSpeciesRecognitionOutput> {
  return aiSpeciesRecognitionFlow(input);
}

const aiSpeciesRecognitionPrompt = ai.definePrompt({
  name: 'aiSpeciesRecognitionPrompt',
  input: {schema: AiSpeciesRecognitionInputSchema},
  output: {schema: AiSpeciesRecognitionOutputSchema},
  prompt: `You are an expert in species recognition. Analyze the provided image and any additional details to suggest potential species matches.

  {{#if additionalDetails}}Additional details: {{{additionalDetails}}}{{/if}}

  Image: {{media url=photoDataUri}}

  Provide an array of suggested species matches, an array of confidence levels (as numbers between 0 and 1) for each match, and a justification for your suggestions.
  Return the response as a valid JSON object.
  `,
});

const aiSpeciesRecognitionFlow = ai.defineFlow(
  {
    name: 'aiSpeciesRecognitionFlow',
    inputSchema: AiSpeciesRecognitionInputSchema,
    outputSchema: AiSoeciesRecognitionOutputSchema,
  },
  async input => {
    const {output} = await aiSpeciesRecognitionPrompt(input);
    return output!;
  }
);
