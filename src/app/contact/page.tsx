'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import type { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dynamically import the MapContainer and other Leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ContactPage() {
  const position: [number, number] = [34.0522, -118.2437];
  const [customIcon, setCustomIcon] = useState<Icon | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import leaflet only on the client side
    import('leaflet').then(L => {
      setCustomIcon(new L.Icon({
        iconUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="%2387AFC7"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><circle cx="12" cy="9.5" r="2.5" fill="white"/></svg>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      }));
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question or want to book a session? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
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
              <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
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
              <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
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
          <div className="h-64 md:h-80 rounded-lg overflow-hidden">
             {isClient && (
               <MapContainer
                  center={position}
                  zoom={15}
                  scrollWheelZoom={false}
                  className="h-full w-full"
                >
                  <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {customIcon && (
                    <Marker position={position} icon={customIcon}>
                        <Popup>LensView Studio</Popup>
                    </Marker>
                  )}
              </MapContainer>
             )}
             {!isClient && <div className="h-full w-full bg-muted animate-pulse rounded-lg" />}
          </div>
        </div>

        <div>
          <Card className="h-full">
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
                <Button type="submit" className="w-full btn-gradient">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
