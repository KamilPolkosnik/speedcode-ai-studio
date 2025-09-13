import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      category: "CRM",
      title: "Virentia Luxuria",
      description: "Nowoczesny CRM do zarządzania magazynem oraz sprzedażą. zbudowany za pomocą narzędzi no-code.",
      image: "🖥️"
    },
    {
      category: "E-commerce",
      title: "Sklep Virentia Luxuria",
      description: "Sklep internetowy Virentia Luxuria - tradycyjny design, skorelowany z produktami ziołowymi.",
      image: "🍀"
    },
    {
      category: "CRM",
      title: "Bookfinanse",
      description: "Kompleksowe oprogramowanie do obsługi zadań i zarządzania klientem.",
      image: "🤝"
    },
        {
      category: "IT",
      title: "Partnerplace",
      description: "Kompleksowa platforma dla firm do zarządzania relacjami partnerskimi na każdym poziomie współpracy.",
      image: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-muted-foreground mb-8">
            Nasi zadowoleni klienci
          </h2>
          <p className="text-xl text-foreground mb-12">
            Dołącz do firm digital-first, które wybrały <span className="text-primary italic font-bold"> SpeedCode</span> i przyspieszyły swoją strategię wejścia na rynek!
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

        {/* Value Proposition */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-secondary text-white p-12 rounded-lg">
            <h2 className="text-5xl font-bold mb-4">
              <span className="block text-3xl">Korzystaj ze swojego oprogramowania</span>
              <span className="block">40% szybciej i taniej.</span>
            </h2>
            <p className="text-xl mb-2">Tworzone szybciej.</p>
            <p className="text-lg mb-8">Do tego lepiej.</p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-primary"
            >
              SKONTAKTUJ SIĘ Z NAMI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;