import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Camera, Check } from 'lucide-react';
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

const highlights = [
    'High-Resolution Digital Images',
    'Professional Editing & Retouching',
    'Online Gallery for Sharing & Downloads',
    'Fast Turnaround Time',
];

export default function Home() {
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <div className="max-w-xl">
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
                    Capturing Life, Perfectly
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  We specialize in creating timeless, high-quality photographs that you'll cherish for a lifetime. See the world through our lens.
                </p>
                <ul className="mt-6 space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground/90">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-4">
                    <Button asChild size="lg">
                        <Link href="/contact">
                            Book a Session
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/gallery">
                            View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-0">
               <Image
                  src="https://placehold.co/800x1000.png"
                  alt="A professional photographer in action"
                  layout="fill"
                  objectFit="cover"
                  className="md:rounded-l-lg"
                  data-ai-hint="photographer action"
                  priority
                />
            </div>
          </div>
        </div>
      </section>

      <section id="featured-work" className="py-16 md:py-24 bg-secondary/50">
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
