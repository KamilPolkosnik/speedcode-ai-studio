const AboutSection = () => {
  const technologies = [
    "Bubble", "FlutterFlow", "Webflow", "Xano", "React", "Node.js", "AI APIs"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground">Who we are?</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                At SpeedCode, we make it possible for both global startups and mature companies to accelerate 
                their product development process by using powerful no-code low-code platforms and artificial 
                intelligence with custom development.
              </p>
              <p>
                By leveraging no-code / low-code platforms such as Bubble, FlutterFlow, Webflow or Xano our 
                clients experience a smooth, agile development process that results in high-quality digital products.
              </p>
              <p>
                We believe that no code / low code development and AI development is the remedy for today's 
                challenges that growing companies face – go-to-market fast, validate ideas, iterate and pivot 
                with product, improve business efficiency.
              </p>
              <p>
                We help companies achieve their goals by delivering powerful platforms and applications in a 
                smarter way - using no-code / low-code technology.
              </p>
              <p className="font-semibold text-foreground">
                Transparent, clear communication and mutual trust are at the core of our values. You're not only 
                our client. You're our partner.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-secondary p-8 rounded-lg text-white text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">AI Software House</h3>
              <p>Leading the future of development</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-subtle">
              <h4 className="text-xl font-bold mb-4 text-foreground">Technologies we use:</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;