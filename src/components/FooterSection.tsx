import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Cog, FileText, Mail, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  const ctaCards = [
    {
      icon: Briefcase,
      title: "CAREERS",
      image: "/lovable-uploads/b6c1191a-df64-4cfc-ae99-f00427cf0801.png"
    },
    {
      icon: Cog,
      title: "OUR SERVICES",
      image: "/lovable-uploads/b6c1191a-df64-4cfc-ae99-f00427cf0801.png"
    },
    {
      icon: FileText,
      title: "GET A QUOTE",
      image: "/lovable-uploads/b6c1191a-df64-4cfc-ae99-f00427cf0801.png"
    },
    {
      icon: Mail,
      title: "CONTACT US",
      image: "/lovable-uploads/b6c1191a-df64-4cfc-ae99-f00427cf0801.png"
    }
  ];

  const services = [
    "Smart Classroom",
    "Augmented Reality / Virtual Reality",
    "IT services",
    "Minerals",
    "Agriculture",
    "Consulting",
    "Machineries",
    "Petrochemicals",
    "Waste Management",
    "Renewable energy",
    "Hospitality with ConnectXenia"
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted">
      {/* CTA Cards Section */}
      <section 
        className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/b6c1191a-df64-4cfc-ae99-f00427cf0801.png')` 
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctaCards.map((card, index) => (
              <Card key={index} className="bg-background/95 backdrop-blur-sm hover:bg-background transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <card.icon className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <Button variant="yukra" className="w-full">
                    {card.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Company */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">ABOUT COMPANY</h3>
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-foreground mb-2">SN INFRA</h4>
                <p className="text-sm text-muted-foreground mb-4">Projects Private Limited</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Incorporated in 2010 by industrial experts and technocrats with track record and experience of over 30 years in the field of project management, heavy electrical, Lighting technology, Renewable Energy, Agro Products, Minerals, Petrochemicals Waste Management
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">GALLERY</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1,2,3,4,5,6].map((item) => (
                  <div key={item} className="aspect-square bg-muted rounded-md overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">SERVICES</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors flex items-start">
                    <span className="text-primary mr-2">›</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">CONTACT INFO</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                You can always contact with us via email or phone. Get in touch with contact and get a quote form.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p>No.589, 1ST D Main Road, 9TH Block</p>
                    <p>2ND Stage, Nagarbhavi, Bangalore KA</p>
                    <p>560072 India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+91 8904506785</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">hello@sninfra.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="bg-muted py-4 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SN INFRA Projects Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;