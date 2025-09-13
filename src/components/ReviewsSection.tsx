import { Card } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      quote: "Oferują wyjątkowo wysoką jakość pracy w stosunku do ceny, którą proponują.",
      author: "Christopher Sioco",
      position: "Co-Founder, TaxRobot",
      rating: 5
    },
    {
      quote: "Potrafili zapewnić wysokiej jakości usługi oraz utrzymać spójne i transparentne zarządzanie projektem.",
      author: "Marcin Krużewski",
      position: "Product Owner, Real Estate",
      rating: 5
    },
    {
      quote: "Współpraca między nami a SpeedCode przebiegała płynnie i bezbłędnie.",
      author: "Randy Padar",
      position: "CEO, Finbay",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Traktujemy naszych klientów jak partnerów
          </h2>
          
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-blue transition-shadow">
              <div className="text-6xl text-primary mb-4">"</div>
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{review.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;