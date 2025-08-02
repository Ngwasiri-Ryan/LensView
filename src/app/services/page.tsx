import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Camera, Users, Building, PartyPopper, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: 'Portrait Photography',
    description: 'Individual, couple, and family portraits that capture your unique personality. Perfect for professional headshots or personal keepsakes.',
  },
  {
    icon: <PartyPopper className="h-10 w-10 text-primary" />,
    title: 'Event Coverage',
    description: 'Comprehensive coverage for weddings, corporate events, parties, and conferences. We document your event so you can relive the moments.',
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Real Estate & Architectural',
    description: 'High-quality images of properties and architecture that highlight the best features to attract buyers and clients.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Commercial & Product',
    description: 'Stunning product photography and commercial visuals for your brand, website, and marketing campaigns to help you stand out.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Lifestyle & Branding',
    description: 'Authentic lifestyle photos for influencers, bloggers, and businesses to build a compelling personal or company brand identity.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We offer a range of professional photography services tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <CardTitle className="font-headline">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
