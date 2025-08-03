
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Camera, Check, ChevronRight, Star, Heart, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimate } from '@/components/scroll-animate';

const featuredWorks = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    alt: 'Portrait of a young woman in natural light',
    title: "Ethereal Portraits",
    category: "Portrait",
    hint: 'portrait beautiful',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop',
    alt: 'Mountain landscape at golden hour',
    title: "Nature's Majesty",
    category: "Landscape",
    hint: 'landscape stunning',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=600&auto=format&fit=crop',
    alt: 'Urban life captured in black and white',
    title: "Urban Stories",
    category: "Street",
    hint: 'street candid',
  },
];

const highlights = [
  'High-Resolution Digital Images',
  'Professional Editing & Retouching',
  'Online Gallery for Sharing & Downloads',
  'Fast Turnaround Time',
];

const testimonials = [
  {
    id: 1,
    quote: "The photos captured our wedding day perfectly. Absolutely stunning work!",
    author: "Sarah & James",
    rating: 5
  },
  {
    id: 2,
    quote: "Professional, creative, and delivered beyond our expectations.",
    author: "Michael T.",
    rating: 5
  },
  {
    id: 3,
    quote: "Our family portraits look amazing. Will definitely book again!",
    author: "The Rodriguez Family",
    rating: 5
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <div className="container mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <ScrollAnimate>
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-primary">CAPTURING MOMENTS SINCE 2015</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
                  Timeless <span className="text-primary">Photography</span> That Tells Your Story
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Specializing in creating authentic, emotion-filled photographs that you'll cherish for generations. Let's create something beautiful together.
                </p>
                <ul className="mt-6 space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex items-center justify-center p-1 rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground/90">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="group">
                    <Link href="/contact" className="flex items-center">
                      Book a Session
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="group">
                    <Link href="/gallery" className="flex items-center">
                      View Gallery
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              </ScrollAnimate>
            </div>
            <div className="relative min-h-[300px] md:min-h-0 hidden md:block">
              <ScrollAnimate speed={0.4}>
              <Image
                src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800&auto=format&fit=crop"
                alt="A professional photographer in action"
                fill
                priority
                className="object-cover md:rounded-l-3xl"
                data-ai-hint="photographer action"
              />
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
        <ScrollAnimate>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Featured <span className="text-primary">Photography</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explore a selection of our recent work across different photography styles and techniques.
            </p>
          </div>
          </ScrollAnimate>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <ScrollAnimate key={work.id}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
                <Link href="/gallery">
                  <CardContent className="p-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white">{work.title}</h3>
                        <p className="text-primary">{work.category}</p>
                      </div>
                    </div>
                    <Image
                      src={work.src}
                      alt={work.alt}
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={work.hint}
                    />
                  </CardContent>
                </Link>
              </Card>
              </ScrollAnimate>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/gallery" className="flex items-center">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              What Clients <span className="text-primary">Say</span>
            </h2>
          </div>
          </ScrollAnimate>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <ScrollAnimate key={testimonial.id}>
              <Card className="p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-medium text-foreground">— {testimonial.author}</p>
              </Card>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Whether it's a portrait session, event coverage, or commercial work, we'd love to hear about your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact" className="flex items-center">
                  Get in Touch
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/pricing" className="flex items-center">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <Image
                      src="https://placehold.co/40x40.png"
                      width={40}
                      height={40}
                      alt={`Happy client ${i}`}
                      className="object-cover"
                      data-ai-hint="person face"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">100+ Happy Clients</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Button asChild variant="ghost" size="sm" className="group">
                <Link href="#" className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Follow Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
