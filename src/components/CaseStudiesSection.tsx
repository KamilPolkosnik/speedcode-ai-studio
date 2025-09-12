import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      category: "IT",
      title: "DS STREAM",
      description: "Nowoczesna strona internetowa zbudowana w Webflow dla firmy IT — z naciskiem na redesign i wydajne zarządzanie treścią.",
      image: "🖥️"
    },
    {
      category: "Pet-Tech",
      title: "Psinder",
      description: "Aplikacja mobilna rewolucjonizująca proces adopcji psów w Polsce poprzez płynne łączenie schronisk, organizacji ratunkowych i przyszłych właścicieli w jednej scentralizowanej platformie.",
      image: "🐕"
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
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Nasi zadowoleni klienci
          </h3>
          <p className="text-xl text-foreground mb-12">
            Dołącz do firm digital-first, które wybrały no-code/low-code i przyspieszyły swoją strategię wejścia na rynek!
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
            PRZECZYTAJ WIĘCEJ HISTORII SUKCESU →
          </Button>
        </div>

        {/* Value Proposition */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-secondary text-white p-12 rounded-lg">
            <h2 className="text-5xl font-bold mb-4">
              <span className="block">Dostarczamy o 40%</span>
              <span className="block text-3xl">większą wartość biznesową.</span>
            </h2>
            <p className="text-xl mb-2">Tworzone inaczej.</p>
            <p className="text-lg mb-8">Dostarczane lepiej.</p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
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