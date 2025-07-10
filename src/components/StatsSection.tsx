import { Button } from "@/components/ui/button";

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-primary-foreground/80 text-sm font-semibold mb-2 tracking-wider">
              SOME FACTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Great experiences build great brands.
            </h2>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed text-lg">
              We remain true to the same principles on which our company was founded over 
              thirty years ago: providing superior service to our clients, putting safety 
              first, creating opportunities for our people, delivering exceptional work.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Contact us
            </Button>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                30+
              </div>
              <p className="text-primary-foreground/80 font-medium">
                Years of Experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                500+
              </div>
              <p className="text-primary-foreground/80 font-medium">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                100+
              </div>
              <p className="text-primary-foreground/80 font-medium">
                Expert Team
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                24/7
              </div>
              <p className="text-primary-foreground/80 font-medium">
                Support Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;