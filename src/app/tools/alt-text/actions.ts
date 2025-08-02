'use server';

import { suggestAltText } from '@/ai/flows/suggest-alt-text';
import { z } from 'zod';

const schema = z.object({
  image: z.instanceof(File).refine((file) => file.size > 0, 'Image is required.'),
});

type State = {
  message: string | null;
  altText: string | null;
  errors?: {
    image?: string[];
  };
};

export async function generateAltText(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    image: formData.get('image'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid submission.',
      errors: validatedFields.error.flatten().fieldErrors,
      altText: null,
    };
  }

  const { image } = validatedFields.data;

  if (!image.type.startsWith('image/')) {
    return { message: 'Please upload a valid image file.', altText: null };
  }
  if (image.size > 4 * 1024 * 1024) { // 4MB limit
    return { message: 'Image size must be less than 4MB.', altText: null };
  }

  try {
    const buffer = await image.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const dataUrl = `data:${image.type};base64,${base64}`;

    const altText = await suggestAltText({ imageUrl: dataUrl });

    if (!altText) {
        return { message: 'AI could not generate a suggestion. Please try another image.', altText: null };
    }

    return {
      message: 'Success!',
      altText: altText,
    };
  } catch (error) {
    console.error('Alt text generation failed:', error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      altText: null,
    };
  }
}
