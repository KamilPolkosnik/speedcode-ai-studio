const ProcessSection = () => {
  const approaches = [
    {
      title: "INNOVATIVE APPROACH",
      color: "bg-primary",
      items: [
        { task: "Analysis of requirements and design", hours: "75 h" },
        { task: "UX/UI design", hours: "125 h" },
        { task: "Project implementation (frontend & backend)", hours: "350 h" },
        { task: "Deployment and testing", hours: "125 h" },
        { task: "Integration with external tools", hours: "50 h" },
        { task: "Project management and communication costs", hours: "125 h" }
      ],
      total: "850 h",
      rate: "$50 - $99"
    },
    {
      title: "TRADITIONAL APPROACH",
      color: "bg-muted",
      items: [
        { task: "Analysis of requirements and design", hours: "200 h" },
        { task: "UX/UI design", hours: "125 h" },
        { task: "Project implementation (frontend & backend)", hours: "600 h" },
        { task: "Deployment and testing", hours: "250 h" },
        { task: "Integration with external tools", hours: "75 h" },
        { task: "Project management and communication costs", hours: "125 h" }
      ],
      total: "1375 h",
      rate: "$50 - $99"
    }
  ];

  const processSteps = [
    {
      title: "SCOPE",
      description: "We bring together your ideas and needs into first draft of solution. We define goals and focus on crucial functions you need to thrive. The very first step is to transform the idea into a product.",
      icon: "🎯"
    },
    {
      title: "DESIGN",
      description: "You agree on the scope of work and we prepare mock-ups including prototyping to confirm that we all understand customer's potential paths. Process ends when both sides make sure that users have the best possible experience.",
      icon: "🎨"
    },
    {
      title: "DEVELOP",
      description: "We build your solution in weekly sprints, using no-code / low-code platforms and AI which we recognized as the best possible choice. You are informed about all the steps we take, no matter what they are. We give you a guarantee of a fixed timeline.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Innovation Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Innovation that drives development efficiency
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            Blending custom development with AI and No-Code Low-Code unlocks the highest level of development 
            optimization — saving time, budget, and resources in building digital products.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-subtle">
                <div className={`${approach.color} text-white p-4 rounded-lg mb-6 text-center`}>
                  <h3 className="font-bold text-lg">{approach.title}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  {approach.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="text-sm text-foreground">{item.task}</span>
                      <span className="font-semibold text-primary">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Hourly Rate</span>
                    <span className="text-primary">{approach.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">PROJECT IMPLEMENTATION TIME</span>
                    <span className="font-bold text-xl text-primary">{approach.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our approach</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            We build software using an innovative combination of custom development, no-code low-code tools and AI 
            to improve the development process and deliver high-quality output. With a strong focus on development 
            optimization, we can bring your idea to life more efficiently compared to traditional software development approach.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🚀</div>
                <p className="text-foreground">
                  We deliver applications with the highest security, usability and performance level standards.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">⚡</div>
                <p className="text-foreground">
                  Usage of no-code low-code platforms and artificial intelligence let us iterate with your product faster than in the traditional approach.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🔄</div>
                <p className="text-foreground">
                  Combining our agile approach with no-code platforms' flexibility we work with clients in lean startup methodology, so you can quickly validate your idea and check market potential.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">✨</div>
                <p className="text-foreground">
                  We kick-off projects quickly and assure smooth delivery, from analysis, UI/UX, development, tests to market launch.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl">🤖</div>
            </div>
          </div>
        </div>

        {/* How we work */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">How we work?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;