
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Camera, Users, Building, PartyPopper, Briefcase, ArrowRight, Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollAnimate } from '@/components/scroll-animate';

const services = [
  {
    icon: <Camera className="h-8 w-8" />,
    title: 'Portrait Photography',
    description: 'Individual, couple, and family portraits that capture your unique personality. Perfect for professional headshots or personal keepsakes.',
    features: [
      'Studio or outdoor sessions',
      'Professional lighting setup',
      'Multiple outfit changes',
      'High-resolution digital files'
    ],
    pricing: 'Starting at $299',
    popular: true
  },
  {
    icon: <PartyPopper className="h-8 w-8" />,
    title: 'Event Coverage',
    description: 'Comprehensive coverage for weddings, corporate events, parties, and conferences. We document your event so you can relive the moments.',
    features: [
      'Full-day or hourly coverage',
      'Multiple photographers available',
      'Fast turnaround for sneak peeks',
      'Online gallery for sharing'
    ],
    pricing: 'Starting at $999',
    popular: false
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: 'Real Estate & Architectural',
    description: 'High-quality images of properties and architecture that highlight the best features to attract buyers and clients.',
    features: [
      'Interior and exterior shots',
      'Twilight photography',
      'Virtual tour options',
      'Drone photography available'
    ],
    pricing: 'Starting at $499',
    popular: true
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Commercial & Product',
    description: 'Stunning product photography and commercial visuals for your brand, website, and marketing campaigns to help you stand out.',
    features: [
      'White background or lifestyle shots',
      'E-commerce ready images',
      '360° product views',
      'Bulk discount pricing'
    ],
    pricing: 'Starting at $199',
    popular: false
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Lifestyle & Branding',
    description: 'Authentic lifestyle photos for influencers, bloggers, and businesses to build a compelling personal or company brand identity.',
    features: [
      'Concept development',
      'Location scouting',
      'Wardrobe styling advice',
      'Social media ready content'
    ],
    pricing: 'Starting at $399',
    popular: false
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Custom Packages',
    description: 'Need something special? We can create a custom photography package tailored exactly to your unique requirements.',
    features: [
      'Personalized consultation',
      'Flexible scheduling',
      'Tailored deliverables',
      'Hybrid service options'
    ],
    pricing: 'Contact for quote',
    popular: false
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <ScrollAnimate>
      <div className="text-center mb-12 md:mb-16">
        <Badge variant="outline" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          Professional Photography Services
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Capture Your Vision
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          We offer a comprehensive range of professional photography services tailored to your unique needs and creative vision.
        </p>
      </div>
      </ScrollAnimate>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ScrollAnimate key={index}>
          <Card 
            className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full flex flex-col ${service.popular ? 'border-primary/30' : ''}`}
          >
            {service.popular && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground shadow-sm">
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-4 ${service.popular ? 'bg-primary/10' : 'bg-secondary'}`}>
                {service.icon}
              </div>
              <CardTitle className="font-headline text-center text-2xl">
                {service.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pb-4 flex-grow">
              <CardDescription className="text-center mb-4">
                {service.description}
              </CardDescription>
              
              <div className="space-y-3 mt-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col items-center pt-0 mt-auto">
              <div className="text-lg font-medium mb-4 text-primary">
                {service.pricing}
              </div>
              <Button 
                variant={service.popular ? "default" : "outline"} 
                className="w-full group-hover:bg-primary/90 group-hover:text-primary-foreground transition-colors"
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
          </ScrollAnimate>
        ))}
      </div>

      {/* CTA Section */}
      <ScrollAnimate>
      <div className="mt-16 md:mt-24 p-8 md:p-12 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">
          Not Sure What You Need?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Our photography consultants can help you determine the perfect service package for your specific requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Calendar className="h-4 w-4" />
            Schedule a Consultation
          </Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
      </ScrollAnimate>
    </div>
  );
}
