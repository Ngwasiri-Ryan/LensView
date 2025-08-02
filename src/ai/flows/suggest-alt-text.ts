'use server';
/**
 * @fileOverview An AI flow for suggesting alt text for an image.
 *
 * - suggestAltText - A function that generates a descriptive alt text for a given image.
 * - SuggestAltTextInput - The input type for the suggestAltText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const SuggestAltTextInputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      "The image to generate alt text for, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SuggestAltTextInput = z.infer<typeof SuggestAltTextInputSchema>;

const prompt = ai.definePrompt({
  name: 'suggestAltTextPrompt',
  input: { schema: SuggestAltTextInputSchema },
  output: { schema: z.string() },
  prompt: `Generate a concise and descriptive alt text for the following image. The alt text should be suitable for use in an HTML img tag.

Image:
{{media url=imageUrl}}`,
});

const suggestAltTextFlow = ai.defineFlow(
  {
    name: 'suggestAltTextFlow',
    inputSchema: SuggestAltTextInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function suggestAltText(input: SuggestAltTextInput): Promise<string> {
  return suggestAltTextFlow(input);
}
