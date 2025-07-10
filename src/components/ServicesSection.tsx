import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Cog, Lightbulb } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "PROJECTS",
      subtitle: "DIVERSE PRODUCT SOLUTIONS",
      description: "We Build turnkey projects with our experience of 30 years in the fields of project management, heavy electrical, Lighting technology, Renewable Energy, Agro Products, Minerals, Petrochemicals Waste Management."
    },
    {
      icon: Users,
      title: "TEAM",
      subtitle: "PROFESSIONAL TEAMWORK",
      description: "We connect expertise across services, markets, and geographies to deliver transformative outcomes. Worldwide, we design, build, finance, operate and maintain."
    },
    {
      icon: Cog,
      title: "ENGINEERING",
      subtitle: "INNOVATIVE SOLUTIONS",
      description: "Our engineering solutions are built on decades of experience and cutting-edge technology to deliver sustainable and efficient systems."
    },
    {
      icon: Lightbulb,
      title: "TECHNOLOGY",
      subtitle: "FUTURE READY SYSTEMS",
      description: "We implement the latest technologies in renewable energy, smart systems, and sustainable practices to build for the future."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-background">
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className="w-16 h-16 mx-auto text-primary" />
                </div>
                <p className="text-primary text-xs font-semibold mb-1 tracking-wider">
                  {service.title}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                  {service.subtitle}
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