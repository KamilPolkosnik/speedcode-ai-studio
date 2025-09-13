import { Card } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      quote: "Wysoka jakość, bardzo szybki czas wykonania.",
      author: "Kamil P.",
      position: "Właściciel, Virentia Luxuria",
      rating: 5
    },
    {
      quote: "Doskonałe zarządzanie projektem, ciekawe propozycje i bardzo szybkie wdrożenie.",
      author: "Aureliusz S.",
      position: "CEO, Bookfinanse",
      rating: 5
    },
    {
      quote: "Współpraca ze SpeedCode to czysta przyjemność.",
      author: "Łukasz Z.",
      position: "Manager, Zetgrid",
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
        </div>

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