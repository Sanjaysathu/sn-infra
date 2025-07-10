import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          We Build a{" "}
          <span className="text-accent">better</span>{" "}
          tomorrow
        </h1>
        
        <div className="mb-12">
          <Button 
            variant="yukra"
            size="lg" 
            className="px-8 py-4 text-lg"
          >
            OUR SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;