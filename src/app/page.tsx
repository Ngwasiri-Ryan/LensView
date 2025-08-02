import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Camera } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredWorks = [
  {
    id: 1,
    src: 'https://placehold.co/600x800.png',
    alt: 'A beautiful portrait',
    hint: 'portrait beautiful',
  },
  {
    id: 2,
    src: 'https://placehold.co/600x800.png',
    alt: 'A stunning landscape',
    hint: 'landscape stunning',
  },
  {
    id: 3,
    src: 'https://placehold.co/600x800.png',
    alt: 'A candid street photo',
    hint: 'street candid',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Photographer holding a camera in a scenic location"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 brightness-50"
          data-ai-hint="photographer scenic"
          priority
        />
        <div className="relative z-10 flex flex-col items-center p-4">
          <div className="bg-black bg-opacity-30 p-8 rounded-lg backdrop-blur-sm">
            <Camera className="h-16 w-16 mb-4 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              LensView Photography
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
              Capturing life&apos;s moments, one frame at a time. Professional photography for every occasion.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/gallery">
                Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="featured-work" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <Link href="/gallery" key={work.id}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <Image
                      src={work.src}
                      alt={work.alt}
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={work.hint}
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/gallery">View All Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
