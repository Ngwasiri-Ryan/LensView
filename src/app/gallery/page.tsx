
"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Search, Heart, Share2, Expand, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  hint: string;
  category: string;
  likes: number;
  title: string;
  liked?: boolean;
};

const galleryImages: GalleryImage[] = [
  { 
    id: '1',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', 
    alt: 'A serene lake at dawn', 
    hint: 'serene lake',
    category: 'Landscape',
    likes: 124,
    title: 'Morning Serenity'
  },
  { 
    id: '2',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 
    alt: 'A smiling person in a city', 
    hint: 'smiling person',
    category: 'Portrait',
    likes: 89,
    title: 'Urban Portrait'
  },
  { 
    id: '3',
    src: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d', 
    alt: 'Mountains under a starry sky', 
    hint: 'mountains starry sky',
    category: 'Astro',
    likes: 215,
    title: 'Celestial Peaks'
  },
  { 
    id: '4',
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946', 
    alt: 'Close-up of a colorful flower', 
    hint: 'flower closeup',
    category: 'Macro',
    likes: 76,
    title: 'Floral Details'
  },
  { 
    id: '5',
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7', 
    alt: 'A classic car on a retro street', 
    hint: 'classic car',
    category: 'Automotive',
    likes: 142,
    title: 'Vintage Beauty'
  },
  { 
    id: '6',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', 
    alt: 'A wedding couple sharing a moment', 
    hint: 'wedding couple',
    category: 'Wedding',
    likes: 198,
    title: 'Eternal Promise'
  },
  { 
    id: '7',
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625', 
    alt: 'Architectural details of a modern building', 
    hint: 'modern architecture',
    category: 'Architecture',
    likes: 67,
    title: 'Urban Geometry'
  },
  { 
    id: '8',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', 
    alt: 'A chef preparing a gourmet dish', 
    hint: 'gourmet food',
    category: 'Food',
    likes: 112,
    title: 'Culinary Art'
  },
  { 
    id: '9',
    src: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083', 
    alt: 'A child playing in a field', 
    hint: 'child playing',
    category: 'Lifestyle',
    likes: 93,
    title: 'Childhood Joy'
  },
  { 
    id: '10',
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', 
    alt: 'Abstract light trails in the dark', 
    hint: 'light trails',
    category: 'Long Exposure',
    likes: 156,
    title: 'Light Trails'
  },
  { 
    id: '11',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f', 
    alt: 'A musician performing on stage', 
    hint: 'musician performing',
    category: 'Event',
    likes: 78,
    title: 'Stage Energy'
  },
  { 
    id: '12',
    src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5', 
    alt: 'Wildlife in its natural habitat', 
    hint: 'wildlife nature',
    category: 'Wildlife',
    likes: 203,
    title: 'Wild Harmony'
  },
];

const categories = [
  { name: 'All', count: galleryImages.length },
  { name: 'Portrait', count: galleryImages.filter(img => img.category === 'Portrait').length },
  { name: 'Landscape', count: galleryImages.filter(img => img.category === 'Landscape').length },
  { name: 'Wedding', count: galleryImages.filter(img => img.category === 'Wedding').length },
  { name: 'Event', count: galleryImages.filter(img => img.category === 'Event').length },
  { name: 'Wildlife', count: galleryImages.filter(img => img.category === 'Wildlife').length },
  { name: 'Food', count: galleryImages.filter(img => img.category === 'Food').length },
  { name: 'Automotive', count: galleryImages.filter(img => img.category === 'Automotive').length },
];

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'popular' | 'recent'>('popular');
  const [images, setImages] = useState<GalleryImage[]>(galleryImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);
  const [loadedImages, setLoadedImages] = useState(8);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let filtered = [...galleryImages];

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(img => 
        img.title.toLowerCase().includes(term) || 
        img.category.toLowerCase().includes(term) ||
        img.alt.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    if (sortBy === 'popular') {
      filtered.sort((a, b) => b.likes - a.likes);
    } else {
      // For "recent" we'll just use the original order
      filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    setImages(filtered);
    setLoadedImages(8); // Reset loaded images when filters change
  }, [searchTerm, selectedCategory, sortBy]);

  const handleLike = (id: string) => {
    setImages(prevImages => 
      prevImages.map(img => 
        img.id === id 
          ? { 
              ...img, 
              liked: !img.liked,
              likes: img.liked ? img.likes - 1 : img.likes + 1 
            } 
          : img
      )
    );
  };

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const loadMore = () => {
    setLoadedImages(prev => Math.min(prev + 4, images.length));
  };

  const visibleImages = images.slice(0, loadedImages);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Hero Header */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Our Visual Stories
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Explore our curated collection of moments captured through the lens. Each image tells a unique story.
        </p>
      </div>

      {/* Gallery Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 md:mb-12">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search photos..."
            className="pl-10 w-full md:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setSortBy(sortBy === 'popular' ? 'recent' : 'popular')}
            >
              {sortBy === 'popular' ? 'Most Popular' : 'Most Recent'}
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button 
            key={category.name} 
            variant="ghost" 
            className={`rounded-full whitespace-nowrap ${
              selectedCategory === category.name ? 'bg-primary/10 text-primary' : ''
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name} <span className="text-muted-foreground ml-1">({category.count})</span>
          </Button>
        ))}
      </div>

      {/* Results Count */}
      {isClient && (
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {Math.min(loadedImages, images.length)} of {images.length} results
        </div>
      )}

      {/* Gallery Grid */}
      {visibleImages.length > 0 ? (
        <>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {visibleImages.map((image) => (
              <div key={image.id} className="break-inside-avoid group">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none">
                  <CardContent className="p-0 relative">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.hint}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="self-end">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="rounded-full bg-background/80 hover:bg-background"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(image.id);
                            }}
                          >
                            <Heart 
                              className={`h-4 w-4 ${image.liked ? 'fill-red-500 text-red-500' : ''}`} 
                            />
                          </Button>
                        </div>
                        
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-medium text-lg">{image.title}</h3>
                          <div className="flex items-center justify-between mt-2">
                            <span className="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary">
                              {image.category}
                            </span>
                            <span className="flex items-center text-sm text-white/80">
                              <Heart className={`h-3 w-3 ${image.liked ? 'fill-red-500 text-red-500' : ''} mr-1`} /> 
                              {image.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-3 bg-background/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <h3 className="font-medium text-sm">{image.title}</h3>
                        <p className="text-xs text-muted-foreground">{image.category}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(window.location.href);
                            // In a real app, you might want to show a toast notification
                          }}
                        >
                          <Share2 className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => openLightbox(image)}
                        >
                          <Expand className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {loadedImages < images.length && (
            <div className="mt-12 text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={loadMore}
              >
                Load More Photos
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No images found matching your criteria.</p>
          <Button 
            variant="ghost" 
            className="mt-4"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
          >
            Clear filters
          </Button>
        </div>
      )}

      {/* Footer CTA */}
      <div className="mt-16 md:mt-24 p-8 md:p-12 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Want to See More?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Explore our full portfolio or get in touch to discuss your photography needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">View Full Portfolio</Button>
          <Button variant="outline" size="lg">Contact Us</Button>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {currentImage && (
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-2 z-10 bg-background/80 hover:bg-background"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="relative aspect-[4/3] bg-black">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="bg-background p-4">
                <DialogHeader>
                  <DialogTitle>{currentImage.title}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-between mt-4">
                  <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                    {currentImage.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleLike(currentImage.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 mr-2 ${currentImage.liked ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                      {currentImage.likes}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
