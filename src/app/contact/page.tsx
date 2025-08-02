import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question or want to book a session? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground hover:text-primary transition-colors">
                  <a href="mailto:contact@lensview.com">contact@lensview.com</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground hover:text-primary transition-colors">
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Studio Location</h3>
                <p className="text-muted-foreground">
                  123 Photo Lane, Artville, CA 90210
                </p>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
            <p className="text-muted-foreground">Saturday: 10am - 4pm (by appointment)</p>
            <p className="text-muted-foreground">Sunday: Closed</p>
          </div>
        </div>

        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we&apos;ll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject">Subject</label>
                  <Input id="subject" placeholder="What can we help with?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea id="message" placeholder="Your message..." rows={6} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
