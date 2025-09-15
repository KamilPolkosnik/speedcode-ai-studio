const ProcessSection = () => {
  const approaches = [
    {
      title: "PODEJŚCIE INNOWACYJNE",
      color: "bg-primary",
      items: [
        { task: "Analiza wymagań i projektowanie", hours: "50 h" },
        { task: "Design UX/UI", hours: "100 h" },
        { task: "Implementacja projektu (frontend & backend)", hours: "350 h" },
        { task: "Wdrożenie i testowanie", hours: "100 h" },
        { task: "Integracja z zewnętrznymi narzędziami", hours: "50 h" },
        { task: "Zarządzanie projektem i koszty komunikacji", hours: "100 h" }
      ],
      total: "750 h",
      rate: "250 - 399zł"
    },
    {
      title: "PODEJŚCIE TRADYCYJNE",
      color: "bg-muted",
      items: [
        { task: "Analiza wymagań i projektowanie", hours: "200 h" },
        { task: "Design UX/UI", hours: "125 h" },
        { task: "Implementacja projektu (frontend & backend)", hours: "600 h" },
        { task: "Wdrożenie i testowanie", hours: "250 h" },
        { task: "Integracja z zewnętrznymi narzędziami", hours: "75 h" },
        { task: "Zarządzanie projektem i koszty komunikacji", hours: "125 h" }
      ],
      total: "1375 h",
      rate: "250 - 399zł"
    }
  ];

  const processSteps = [
    {
      title: "ZAKRES",
      description: "Łączymy Twoje pomysły i potrzeby oraz nasze sugestie. Definiujemu cele i skupiamy się na kluczowych funkcjach potrzebnych do rozwoju. Pierwszym krokiem jest przekształcenie idei w produkt.",
      icon: "🎯"
    },
    {
      title: "DESIGN",
      description: "Uzgadniamy zakres prac, przygotowujemy makiety wraz z prototypem, aby potwierdzić, że wszyscy rozumiemy potencjalne ścieżki klientów. Kończymy proces, kiedy upewnimy się, że użytkownik oprogramowania dostanie jak najlepsze rozwiązanie, a Twoja firma dzięki temu zarobi.",
      icon: "🎨"
    },
    {
      title: "ROZWÓJ",
      description: "Budujemy Twoje oprogramowanie, używając platform no-code/low-code oraz AI, które uznaliśmy za najlepszy możliwy wybór. Jesteś informowany o wszystkich krokach, które podejmujemy.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Innovation Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Innowacja, która napędza efektywność rozwoju
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            Łączenie narzędzi AI oraz No-Code/Low-Code odblokowuje najwyższy poziom optymalizacji 
            rozwoju — oszczędzając Twój czas, budżet i zasoby w budowaniu produktów cyfrowych.
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
                    <span className="font-semibold">Stawka godzinowa</span>
                    <span className="text-primary">{approach.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">CZAS REALIZACJI PROJEKTU</span>
                    <span className="font-bold text-xl text-primary">{approach.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Nasze podejście</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            Budujemy oprogramowanie używając innowacyjnej kombinacji narzędzi no-code/low-code 
            oraz AI, aby usprawnić proces rozwoju i dostarczyć wysokiej jakości rezultaty. Dzięki silnemu 
            skupieniu na optymalizacji rozwoju, możemy ożywić Twoją ideę bardziej efektywnie niż tradycyjne podejście do rozwoju oprogramowania.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl" style={{ color: '#00D9FF' }}>🚀</div>
                <p className="text-foreground">
                  Dostarczamy aplikacje z najwyższymi standardami bezpieczeństwa, użyteczności i wydajności.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl" style={{ color: '#00D9FF' }}>⚡</div>
                <p className="text-foreground">
                  Wykorzystanie platform no-code/low-code oraz sztucznej inteligencji pozwala nam iterować z Twoim produktem szybciej niż w tradycyjnym podejściu.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl" style={{ color: '#00D9FF' }}>🔄</div>
                <p className="text-foreground">
                  Łącząc nasze zwinne podejście z elastycznością platform no-code, pracujemy z klientami w metodologii lean startup, dzięki czemu możesz szybko zwalidować swoją ideę i sprawdzić potencjał rynkowy.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl" style={{ color: '#00D9FF' }}>✨</div>
                <p className="text-foreground">
                  Szybko rozpoczynamy projekty i zapewniamy płynną realizację, od analizy, UI/UX, rozwoju, testów po wprowadzenie na rynek.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl inline-block">
                <span className="inline-block animate-robot-head">🤖</span>
              </div>
            </div>
          </div>
        </div>

        {/* How we work */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Jak pracujemy?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-6" style={{ color: '#00D9FF' }}>{step.icon}</div>
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