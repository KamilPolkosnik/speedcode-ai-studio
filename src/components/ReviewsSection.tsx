import { Card } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      quote: "They have extremely high-quality work for the price point they are offering.",
      author: "Christopher Sioco",
      position: "Co-Founder, TaxRobot",
      rating: 5
    },
    {
      quote: "They were able to provide high-quality services and maintain consistent and transparent project management.",
      author: "Marcin Krużewski",
      position: "Product Owner, Real Estate",
      rating: 5
    },
    {
      quote: "The cooperation between us and SpeedCode was smooth and flawless.",
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
            We treat our clients as partners
          </h2>
          
          <div className="bg-card p-8 rounded-lg shadow-subtle inline-block mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl font-bold text-primary mr-2">5.0</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Based on 24 Clutch reviews
            </p>
          </div>
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