import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PartnershipSection = () => {
  const partnershipBenefits = [
    {
      icon: "🤝",
      title: "Wspólne partnerstwo",
      description: "Nie jesteś tylko klientem - stajesz się naszym partnerem biznesowym w realizacji projektu."
    },
    {
      icon: "💡",
      title: "Twój pomysł, nasza realizacja",
      description: "Przedstawiasz nam swój pomysł na aplikację, a my zajmujemy się kompleksową realizacją."
    },
    {
      icon: "📈",
      title: "Wspólne zyski",
      description: "Dzielimy się sukcesem - zyski z aplikacji są dzielone zgodnie z ustalonym modelem partnerskim."
    },
    {
      icon: "🚀",
      title: "Pełne wsparcie techniczne",
      description: "Zapewniamy kompletne wsparcie techniczne, rozwój i utrzymanie aplikacji."
    },
    {
      icon: "⚡",
      title: "Szybkie wejście na rynek",
      description: "Wykorzystujemy nasze doświadczenie i technologie, aby szybko wprowadzić Twój produkt na rynek."
    },
    {
      icon: "🎯",
      title: "Strategiczne podejście",
      description: "Razem opracowujemy strategię produktu, model biznesowy i plan rozwoju."
    }
  ];

  return (
    <section id="partnership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary italic">Zostań</span>
            <span className="text-foreground"> naszym </span>
            <span className="text-primary italic">partnerem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Masz pomysł na aplikację, ale brakuje Ci zasobów technicznych? Pracujemy również w modelu partnerskim - 
            Ty przedstawiasz pomysł, my go realizujemy, a razem dzielimy się sukcesem!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnershipBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-blue transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-secondary rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Jak wygląda model partnerski?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-5xl">1️⃣</div>
              <h4 className="text-xl font-bold">Przedstaw pomysł</h4>
              <p className="text-white/90">
                Opowiedz nam o swojej idei na aplikację, swojej wizji produktu i grupie docelowej.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl">2️⃣</div>
              <h4 className="text-xl font-bold">Wspólna analiza</h4>
              <p className="text-white/90">
                Razem analizujemy potencjał biznesowy, opracowujemy strategię i ustalamy warunki partnerstwa.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl">3️⃣</div>
              <h4 className="text-xl font-bold">Realizacja i zyski</h4>
              <p className="text-white/90">
                Tworzymy aplikację, wprowadzamy ją na rynek i dzielimy się sukcesem według ustalonego modelu.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg font-semibold mb-2">
              💼 Idealne dla przedsiębiorców, którzy:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p>• Mają innowacyjny pomysł na aplikację</p>
                <p>• Brakuje im zasobów technicznych</p>
                <p>• Chcą szybko wejść na rynek</p>
              </div>
              <div className="space-y-2">
                <p>• Szukają doświadczonego partnera technicznego</p>
                <p>• Chcą dzielić ryzyko i zyski</p>
                <p>• Potrzebują wsparcia strategicznego</p>
              </div>
            </div>
          </div>

          <div className="ai-bounce inline-block">
            <a href="#contact">
              <Button 
                type="button"
                size="lg"
                className="bg-primary text-white hover:bg-white/90 rounded-[28px] px-10 py-6 uppercase tracking-wide border-0 shadow-[0_20px_60px_-10px_rgba(255,255,255,0.3)] font-bold"
              >
                Porozmawiajmy o partnerstwie
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;