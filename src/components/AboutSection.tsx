import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Main heading */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-2 tracking-wider">
            BUSINESS AND INNOVATIVE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            WE PROVIDE VERSATILE SOLUTIONS
          </h2>
          <Button variant="outline" size="lg" className="mt-4">
            READ MORE
          </Button>
        </div>

        {/* Three cards section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About SN INFRA Card */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                ABOUT SN INFRA
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Company with experience of over 30 years in the field of project management, 
                heavy electrical, Lighting technology, Renewable Energy, Agro Products, 
                Minerals, Petrochemicals Waste Management.
              </p>
              <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                Read more
              </Button>
            </CardContent>
          </Card>

          {/* Effective Teamwork Card */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                EFFECTIVE TEAMWORK
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our projects are done with best in class knowledgeable and innovative 
                workers who are capable of creating immense value in each project through 
                teamwork, this legacy is followed in all our sectors of work.
              </p>
              <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                Read more
              </Button>
            </CardContent>
          </Card>

          {/* Core Values Card */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                CORE VALUES
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Five basic values of Enterprise, Responsibility, Trust, Respect, 
                Professionalism are held in common by all SN INFRA employees at every level. 
                All our major company decisions are taken by following the core values.
              </p>
              <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                Read more
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;