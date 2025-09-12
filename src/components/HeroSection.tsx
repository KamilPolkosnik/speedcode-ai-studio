import { Button } from "@/components/ui/button";
import heroCheetah from "@/assets/hero-cheetah.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">We develop custom </span>
              <span className="text-primary italic">software</span>
              <span className="text-foreground"> for businesses </span>
              <span className="text-primary italic">faster</span>
              <span className="text-foreground"> and </span>
              <span className="text-primary italic">more efficiently</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              By selecting the right technology for each project, we develop digital products up to 40% faster. 
              Our custom solutions and automations combine custom development with AI and No-Code / Low-Code.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-variant shadow-blue px-8 py-4 text-lg font-semibold"
            >
              LET'S TALK
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={heroCheetah} 
              alt="Fast AI Development" 
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            GAIN AN EDGE:
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;