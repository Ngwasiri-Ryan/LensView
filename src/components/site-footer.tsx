import { Camera } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Camera className="h-5 w-5 text-primary" />
            <span className="font-semibold font-headline">LensView</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LensView. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
