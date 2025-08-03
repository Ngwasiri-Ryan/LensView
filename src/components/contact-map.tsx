
"use client";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/map'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted animate-pulse rounded-lg" />
});

export function ContactMap() {
  return (
    <Map 
      center={[34.0522, -118.2437]} // Example coordinates (Los Angeles)
      zoom={15}
      markerText="LensView Studio"
      className="h-full w-full"
    />
  )
}
