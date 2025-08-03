
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">About The Photographer</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The eye behind the lens.
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0 md:p-8">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" // Use the direct image URL
              alt="Portrait of Alex Doe, professional photographer"
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              priority
              data-ai-hint="photographer portrait"
            />
            </div>
            <div className="md:col-span-2 p-6 md:p-0">
              <h2 className="text-3xl font-bold font-headline mb-4">Alex Doe</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Founder & Lead Photographer
              </p>
              
              <Separator className="my-6" />

              <div className="space-y-6 text-base text-foreground/90">
                <p>
                  From a young age, I was fascinated by the power of a single image to tell a complex story. That fascination grew into a passion, and eventually, a profession. With over a decade of experience, I founded LensView to create timeless, evocative photographs that my clients can cherish for a lifetime.
                </p>
                <p>
                  My approach is a blend of documentary and fine-art photography. I believe in capturing authentic moments as they unfold, while also paying close attention to composition, light, and color to create images that are not just pictures, but pieces of art.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  &quot;Photography is the art of observation. It has little to do with the things you see and everything to do with the way you see them.&quot; - Elliott Erwitt
                </blockquote>
                <p>
                  Whether it&apos;s the intimate glance between a newly married couple, the proud look of a graduate, or the vibrant energy of a corporate event, I strive to capture the essence of the moment. Let&apos;s work together to tell your story.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
