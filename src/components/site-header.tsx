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
        hasScrolled || pathname !== '/'
          ? 'bg-background/95 backdrop-blur-md border-b border-border/20 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'flex items-center justify-between h-16 transition-all duration-300',
          !hasScrolled && pathname === '/' && 'h-20'
        )}>
          {/* Logo Group - Left aligned but part of centered layout */}
          <div className="flex items-center md:absolute md:left-8 lg:left-12">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="Home"
            >
              <Camera className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <span className="font-bold text-xl font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                LensView
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'relative text-sm font-medium transition-colors px-1 py-2',
                    'after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-8px)] hover:after:left-[4px]',
                    pathname === href 
                      ? 'text-primary after:w-[calc(100%-8px)] after:left-[4px]' 
                      : 'text-foreground/80 hover:text-primary'
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button - Right aligned but part of centered layout */}
          <div className="flex items-center md:absolute md:right-8 lg:right-12">
            <Button 
              asChild 
              size={hasScrolled ? 'default' : 'lg'} 
              className={cn(
                'hidden md:inline-flex transition-all',
                hasScrolled ? 'scale-95' : 'scale-100'
              )}
            >
              <Link href="/contact" className="font-semibold">
                Book a Session
              </Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden hover:bg-primary/10 -mr-2"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              
              {/* Mobile Menu Content */}
              <SheetContent side="right" className="w-full max-w-xs px-4">
                <div className="flex flex-col h-full pt-6">
                  <div className="flex items-center pb-6 border-b border-border/20">
                    <Camera className="h-6 w-6 text-primary mr-2" />
                    <span className="font-bold text-lg font-headline">LensView</span>
                  </div>
                  
                  <nav className="flex-grow py-6">
                    <ul className="flex flex-col gap-4">
                      {navLinks.map(({ href, label }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              'text-lg font-medium transition-colors flex items-center px-3 py-2 rounded-lg',
                              'hover:bg-accent/50',
                              pathname === href 
                                ? 'text-primary bg-accent/20' 
                                : 'text-foreground/80'
                            )}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  
                  <Button 
                    size="lg" 
                    className="mt-auto mb-4 w-full font-semibold"
                    asChild
                  >
                    <Link 
                      href="/contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book a Session
                    </Link>
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