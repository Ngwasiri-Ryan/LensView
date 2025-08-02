import { Camera, Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/tools/alt-text', label: 'AI Tool' },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Camera className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl font-headline text-foreground">LensView</span>
            </Link>
            <p className="text-muted-foreground">
              Capturing life&apos;s moments, one frame at a time. Professional photography for every occasion.
            </p>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-foreground mb-4">Sitemap</h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@lensview.com" className="hover:text-primary transition-colors">contact@lensview.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} LensView. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
