import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      category: "IT",
      title: "DS STREAM",
      description: "A modern website built in Webflow for an IT company — with a focus on redesign and efficient content management.",
      image: "🖥️"
    },
    {
      category: "Pet-Tech",
      title: "Psinder",
      description: "A mobile application transforming the dog adoption process in Poland by seamlessly connecting shelters, rescues, and future pet owners in one centralized platform.",
      image: "🐕"
    },
    {
      category: "IT",
      title: "Partnerplace",
      description: "Comprehensive platform for companies to manage partner relationships on every level of cooperation.",
      image: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Our satisfied customers
          </h3>
          <p className="text-xl text-foreground mb-12">
            Join digital-first companies that opted for no-code / low-code and accelerated their go-to-market strategy!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-6 hover:shadow-blue transition-shadow cursor-pointer">
              <div className="text-6xl text-center mb-4">{study.image}</div>
              <div className="text-sm text-primary font-semibold mb-2">{study.category}</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{study.title}</h3>
              <p className="text-muted-foreground">{study.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            READ MORE SUCCESS STORIES →
          </Button>
        </div>

        {/* Value Proposition */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-secondary text-white p-12 rounded-lg">
            <h2 className="text-5xl font-bold mb-4">
              <span className="block">We deliver 40%</span>
              <span className="block text-3xl">more business value.</span>
            </h2>
            <p className="text-xl mb-2">Built differently.</p>
            <p className="text-lg mb-8">Delivered better.</p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;