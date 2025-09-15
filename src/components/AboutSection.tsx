const AboutSection = () => {
  const technologies = [
    "ChatGPT", "Bubble", "FlutterFlow", "Lovable", "Bolt.new", "Webflow", "Xano", "React", "Node.js", "AI APIs", "Inne - najlepsze dla Twojego projektu!",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground">Kim jesteśmy?</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                W SpeedCode umożliwiamy zarówno globalnym startupom, drobnym przedsiębiorcom jak i dojrzałym firmom przyspieszenie 
                procesu tworzenia produktów dzięki zaawansowanym platformom no-code/low-code oraz sztucznej 
                inteligencji.
              </p>
              <p>
                Wykorzystując platformy no-code/low-code takie jak Bubble, FlutterFlow, Webflow, Xano, Lovable, Bolt.new i inncych, 
                nasi klienci doświadczają płynnego, zwinnego procesu rozwoju, który skutkuje wysokiej jakości 
                produktami cyfrowymi, w tym stronami internetowymi i sklepami online.
              </p>
              <p>
                Wierzymy, że rozwój no-code/low-code oraz rozwój AI to remedium na dzisiejsze wyzwania, 
                z którymi mierzą się rozwijające się firmy – szybkie wejście na rynek, walidacja pomysłów, 
                iteracja i pivot z produktem, poprawa efektywności biznesowej.
              </p>
              <p>
                Pomagamy firmom osiągnąć swoje cele poprzez dostarczanie zaawansowanych platform i aplikacji 
                w inteligentniejszy sposób - wykorzystując technologię AI, no-code/low-code oraz tworzenie 
                dedykowanych stron internetowych i sklepów e-commerce.
              </p>
              <p className="font-semibold text-foreground">
                Transparentna, jasna komunikacja i wzajemne zaufanie to fundament naszych wartości. 
                Nie jesteś tylko naszym klientem. Jesteś naszym partnerem.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-secondary p-8 rounded-lg text-white text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">SpeedCode</h3>
              <p>Szybciej, lepiej, taniej!</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-subtle">
              <h4 className="text-xl font-bold mb-4 text-foreground">Technologie, których używamy:</h4>
              <div className="flex flex-wrap gap-3 tech-wave">
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