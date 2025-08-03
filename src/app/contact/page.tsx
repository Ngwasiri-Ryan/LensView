import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Calendar, Send, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ContactMap } from '@/components/contact-map';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16">
        <Badge variant="outline" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          Let's Connect
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Get In Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Have a question or want to book a session? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Information Column */}
        <div className="space-y-8">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
              <CardDescription>Reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    <a href="mailto:contact@lensview.com" className="hover:underline">
                      contact@lensview.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Typically responds within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    <a href="tel:+1234567890" className="hover:underline">
                      +1 (234) 567-890
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Call or text during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Studio Location</h3>
                  <p className="text-muted-foreground">
                    123 Photo Lane, Artville, CA 90210
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="#" className="text-primary hover:underline">Get directions</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Clock className="h-5 w-5" /> Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9am - 6pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10am - 4pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground">
                * Saturday appointments available upon request
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full group">
                <Calendar className="h-4 w-4 mr-2" />
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Form and Map Column */}
        <div className="space-y-8">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <Input id="name" placeholder="Your Name" className="focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" className="focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-medium">Subject</label>
                  <Input id="subject" placeholder="What can we help with?" className="focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    rows={6} 
                    className="focus-visible:ring-primary" 
                  />
                </div>
                <Button type="submit" className="w-full group" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Interactive Map Section */}
          <Card className="border-none shadow-lg h-[400px] overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Our Studio Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-56px)]">
              <ContactMap />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="mt-16 md:mt-24 p-8 md:p-12 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Why Clients Love Working With Us</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
          "The team at LensView made our photoshoot experience effortless and fun. 
          The results were beyond our expectations and we couldn't be happier!"
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">View Testimonials</Button>
          <Button variant="outline" size="lg">See Our Work</Button>
        </div>
      </div>
    </div>
  );
}
