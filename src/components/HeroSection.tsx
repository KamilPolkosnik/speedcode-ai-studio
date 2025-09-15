import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Button } from "@/components/ui/button";
import heroF35Universal from "@/assets/hero-f35-universal.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-foreground">Tworzymy </span>
              <span className="text-primary italic">nowoczesne</span>{" "}
              <span className="text-foreground">rozwiązania cyfrowe dla Twojej firmy — </span>
              <span className="text-primary italic">szybciej</span>{" "}
              <span className="text-foreground">i </span>
              <span className="text-primary italic">efektywniej</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Dobieramy technologię do Twoich potrzeb, aby dostarczać produkty cyfrowe{" "}
              <span className="font-bold">nawet 40% szybciej i taniej.</span> Łączymy najnowsze osiągnięcia AI z praktycznymi narzędziami no‑code i low‑code.
            </p>

                        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-foreground">Aplikacje, strony i sklepy internetowe — </span>
                                        <span className="text-primary italic">szyte na miarę</span>
            </h2>
            
            <div className="flex justify-center lg:justify-start">
            <a href="#contact">
              <Button 
                type="button"
                size="lg"
                className="ai-bounce inline-flex items-center justify-center h-14 md:h-16 px-10 leading-none text-center bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[28px] uppercase tracking-wide border-0 shadow-[0_20px_60px_-10px_rgba(47,107,255,0.45)]"
              >
                ROZPOCZNIJMY ROZMOWĘ
              </Button>
            </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={heroF35Universal} 
              alt="Szybki rozwój z AI" 
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="text-5xl font-bold uppercase tracking-wider mb-4 pb-5">
            ZDOBĄDŹ PRZEWAGĘ:
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <CountUp start={1} end={40} duration={2} suffix="%" enableScrollSpy />
              </div>
              <p className="text-m text-muted-foreground font-bold">Szybsze i tańsze wdrożenie</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                whileInView={{ scale: [1, 1.3, 0.95, 1.1, 1] }}
                transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
                viewport={{ once: true }}
              >
                AI
              </motion.div>
              <p className="text-m text-muted-foreground font-bold">Skuteczność dzięki najnowszej technologii</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                whileInView={{ scale: [1, 1.3, 0.95, 1.1, 1] }}
                transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
                viewport={{ once: true }}
              >
                24/7
              </motion.div>
              <p className="text-m text-muted-foreground font-bold">Ciągła dostępność</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;