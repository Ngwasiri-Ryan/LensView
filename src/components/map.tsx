
'use client';

import { cn } from "@/lib/utils"

interface MapProps {
    center: [number, number];
    zoom: number;
    markerText: string;
    className?: string;
}

export default function Map({ center, zoom, markerText, className }: MapProps) {
  // This is a placeholder for a map component.
  // In a real application, you would use a library like react-leaflet or google-maps-react.
  return (
    <div className={cn("bg-muted flex items-center justify-center", className)}>
      <div className="text-center">
        <p className="font-bold text-lg text-muted-foreground">Map Placeholder</p>
        <p className="text-sm text-muted-foreground">{markerText}</p>
        <p className="text-xs text-muted-foreground">Center: {center.join(', ')}, Zoom: {zoom}</p>
      </div>
    </div>
  );
}
