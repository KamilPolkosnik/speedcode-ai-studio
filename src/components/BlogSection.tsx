import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const articles = [
    {
      title: "How to Automate Logistics Processes and Improve Customer Service in a Freight Company?",
      image: "🚚",
      category: "AI Automation"
    },
    {
      title: "Artificial Intelligence in Transport: How AI Optimizes Routes and Reduces Costs?",
      image: "🤖",
      category: "AI Solutions"
    },
    {
      title: "AI and No-Code Low-Code in Automated Accounting: How to Eliminate Manual Data Entry",
      image: "📊",
      category: "Business Automation"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Articles about no-code low-code & AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore news from the digital development world. Check out our latest articles about AI and no-code low-code technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-blue transition-shadow cursor-pointer">
              <div className="bg-gradient-secondary p-12 text-center">
                <div className="text-6xl text-white">{article.image}</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-3">{article.category}</div>
                <h3 className="font-bold text-foreground leading-tight">{article.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            READ MORE BLOG POSTS →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;