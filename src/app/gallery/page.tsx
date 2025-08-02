import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'A serene lake at dawn', hint: 'serene lake' },
  { src: 'https://placehold.co/600x800.png', alt: 'A smiling person in a city', hint: 'smiling person' },
  { src: 'https://placehold.co/800x600.png', alt: 'Mountains under a starry sky', hint: 'mountains starry sky' },
  { src: 'https://placehold.co/800x600.png', alt: 'Close-up of a colorful flower', hint: 'flower closeup' },
  { src: 'https://placehold.co/600x800.png', alt: 'A classic car on a retro street', hint: 'classic car' },
  { src: 'https://placehold.co/800x600.png', alt: 'A wedding couple sharing a moment', hint: 'wedding couple' },
  { src: 'https://placehold.co/600x800.png', alt: 'Architectural details of a modern building', hint: 'modern architecture' },
  { src: 'https://placehold.co/800x600.png', alt: 'A chef preparing a gourmet dish', hint: 'gourmet food' },
  { src: 'https://placehold.co/600x800.png', alt: 'A child playing in a field', hint: 'child playing' },
  { src: 'https://placehold.co/800x600.png', alt: 'Abstract light trails in the dark', hint: 'light trails' },
  { src:https://placehold.co/600x800.png', alt: 'A musician performing on stage', hint: 'musician performing' },
  { src: 'https://placehold.co/800x600.png', alt: 'Wildlife in its natural habitat', hint: 'wildlife nature' },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Gallery</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A collection of moments we&apos;ve captured. Explore our portfolio of portraits, landscapes, and events.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="break-inside-avoid">
             <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                    <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.hint}
                    />
                </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
