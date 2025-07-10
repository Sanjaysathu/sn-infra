import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Cog, Lightbulb } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "AR / VR / MR XR",
      description: "Advanced augmented, virtual, and mixed reality solutions for immersive experiences and training applications."
    },
    {
      icon: Users,
      title: "SMART CLASSROOM",
      description: "Intelligent educational technology solutions that enhance learning experiences through interactive digital platforms."
    },
    {
      icon: Lightbulb,
      title: "AGRICULTURAL RICE & CASHEW",
      description: "Comprehensive agricultural solutions for rice and cashew cultivation, processing, and quality management."
    },
    {
      icon: Cog,
      title: "MINERALS PROCESSING",
      description: "Advanced mineral extraction and processing technologies for efficient and sustainable operations."
    },
    {
      icon: Building,
      title: "CONSULTING SERVICES",
      description: "Expert consulting services across various industries to optimize operations and drive growth."
    },
    {
      icon: Lightbulb,
      title: "PETROCHEMICALS PROCESSING",
      description: "State-of-the-art petrochemical processing solutions with focus on safety and efficiency."
    },
    {
      icon: Users,
      title: "RENEWABLE ENERGY",
      description: "Sustainable energy solutions including solar, wind, and other renewable energy technologies."
    },
    {
      icon: Cog,
      title: "WASTE MANAGEMENT",
      description: "Comprehensive waste management systems for environmental sustainability and resource recovery."
    },
    {
      icon: Building,
      title: "MACHINERIES",
      description: "Industrial machinery solutions and automation systems for enhanced productivity and efficiency."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm mb-2">WE PROVIDE</p>
          <h2 className="text-4xl font-bold text-foreground">OUR SERVICES</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-background">
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className="w-16 h-16 mx-auto text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;