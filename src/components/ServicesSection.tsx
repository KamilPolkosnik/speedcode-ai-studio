import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "🎯",
      title: "Complete Support",
      description: "From business analysis, workshops, branding, and UX/UI design to development and testing."
    },
    {
      icon: "💻",
      title: "Web Platforms",
      description: "Websites, booking systems, e-learning platforms, e-commerce platforms, and job board solutions."
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "End-to-end mobile applications for iOS and Android — tailored to business goals."
    },
    {
      icon: "🤖",
      title: "AI Solutions & Automations",
      description: "Personalized ChatBots, Generators, Analyzers and AI Agents."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Innovation Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary italic">Innovative</span>
            <span className="text-foreground"> technologies, real business impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At SpeedCode, we always choose the most efficient technology path to deliver scalable, secure, 
            and high-performing solutions — from MVPs and custom tools to advanced applications and complex systems. 
            This approach drives at least 30% greater efficiency for our clients.
          </p>
        </div>

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-foreground">From idea to launch </span>
            <span className="text-primary italic">– faster, end-to-end, without compromise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
            Using advanced technologies like AI and No-Code Low-Code, we help every company efficiently turn ideas 
            into fully functional and high-performance AI services, custom tools, web and mobile applications. 
            Explore our full range of services:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-blue transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary-variant shadow-blue"
          >
            ESTIMATE PROJECT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;