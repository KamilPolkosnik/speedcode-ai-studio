import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "🎯",
      title: "Kompleksowe Wsparcie",
      description: "Od analizy biznesowej, warsztatów, brandingu i projektowania UX/UI po rozwój i testowanie aplikacji."
    },
    {
      icon: "💻",
      title: "Platformy Webowe",
      description: "Strony internetowe, sklepy online, CRM'y, systemy rezerwacji, platformy e-learningowe i rozwiązania job board."
    },
    {
      icon: "📱",
      title: "Aplikacje Mobilne",
      description: "Kompletne aplikacje mobilne na iOS i Android — dostosowane do celów biznesowych."
    },
    {
      icon: "🤖",
      title: "Rozwiązania AI i Automatyzacja",
      description: "Spersonalizowane ChatBoty, Generatory, Analizatory oraz Agenci AI."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Innovation Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary italic">Innowacyjne</span>
            <span className="text-foreground"> technologie,</span>
            <span className="text-primary italic"> szybszy</span>
            <span className="text-foreground"> start Twojego biznesu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            W SpeedCode zawsze wybieramy najefektywniejszą ścieżkę technologiczną, aby dostarczać skalowalne, 
            bezpieczne i wysokowydajne rozwiązania — od MVP i narzędzi szytych na miarę po zaawansowane aplikacje 
            i złożone systemy. To podejście zapewnia naszym klientom co najmniej <span className="text-primary italic font-bold"> 40% szybszą efektywność przy równoczesnym zmniejszeniu kosztów.</span>
          </p>
        </div>

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-foreground">Od pomysłu do uruchomienia </span>
            <span className="text-primary italic">– szybciej, kompleksowo, bez kompromisów</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
            Wykorzystując zaawansowane technologie AI, No-Code/Low-Code, pomagamy Ci efektywnie 
            przekształcać Twój pomysł w pełni funkcjonalne narzędzia szyte na miarę, strony internetowe, 
            sklepy online oraz aplikacje mobilne. Poznaj pełną gamę naszych usług:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-blue transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="ai-bounce inline-block">
            <Button 
              type="button"
              size="lg"
              className="bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[28px] px-10 py-6 uppercase tracking-wide border-0 shadow-[0_20px_60px_-10px_rgba(47,107,255,0.45)]"
            >
              Wyceń swój projekt
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;