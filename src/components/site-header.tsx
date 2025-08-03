
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Camera, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/tools/alt-text', label: 'AI Tool' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out',
        hasScrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg'
          : 'bg-transparent',
        pathname !== '/' && 'bg-background/80 backdrop-blur-lg border-b'
      )}
    >
      <div
        className={cn(
          'container flex items-center transition-all duration-300 ease-in-out max-w-screen-2xl',
          hasScrolled ? 'h-16' : 'h-20'
        )}
      >
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">LensView</span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4 ml-6">
            <Button asChild className="hidden md:inline-flex">
                <Link href="/contact">Book a Session</Link>
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b pb-4">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Camera className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline">LensView</span>
                    </Link>
                  </div>
                  <nav className="flex-grow mt-6">
                    <ul className="flex flex-col gap-4">
                    {navLinks.map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'block text-lg font-medium transition-colors hover:text-primary',
                            pathname === href ? 'text-primary' : 'text-foreground'
                          )}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                    </ul>
                  </nav>
                  <Button asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Session</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
