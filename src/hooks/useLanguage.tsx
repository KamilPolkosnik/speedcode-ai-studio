import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'PL' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  PL: {
    // Header
    'nav.services': 'Usługi',
    'nav.projects': 'Projekty', 
    'nav.about': 'O nas',
    'nav.partnership': 'Zostań partnerem',
    'nav.letsTalk': 'Porozmawiajmy',
    'nav.services.title': 'Zobacz nasze usługi',
    'nav.projects.title': 'Zobacz nasze projekty',
    'nav.about.title': 'Dowiedz się o nas więcej',
    'nav.partnership.title': 'Zostań naszym partnerem',
    'nav.letsTalk.title': 'Umów krótką rozmowę',
    'nav.language.title': 'Zmień język na angielski',
    
    // Hero Section
    'hero.title1': 'Tworzymy ',
    'hero.title2': 'nowoczesne',
    'hero.title3': ' rozwiązania cyfrowe dla Twojej firmy — ',
    'hero.title4': 'szybciej',
    'hero.title5': ' i ',
    'hero.title6': 'efektywniej',
    'hero.subtitle': 'Dobieramy technologię do Twoich potrzeb, aby dostarczać produkty cyfrowe nawet 40% szybciej i taniej. Łączymy najnowsze osiągnięcia AI z praktycznymi narzędziami no‑code i low‑code.',
    'hero.apps': 'Aplikacje, strony i sklepy internetowe — ',
    'hero.tailored': 'szyte na miarę',
    'hero.cta': 'ROZPOCZNIJMY ROZMOWĘ',
    'hero.advantage': 'ZDOBĄDŹ PRZEWAGĘ:',
    'hero.faster': 'Szybsze i tańsze wdrożenie',
    'hero.ai': 'Skuteczność dzięki najnowszej technologii',
    'hero.support': 'Ciągła dostępność',
    
    // Services Section
    'services.innovation.title1': 'Innowacyjne',
    'services.innovation.title2': ' technologie,',
    'services.innovation.title3': ' szybszy',
    'services.innovation.title4': ' start Twojego biznesu',
    'services.innovation.subtitle': 'W SpeedCode zawsze wybieramy najefektywniejszą ścieżkę technologiczną, aby dostarczać skalowalne, bezpieczne i wysokowydajne rozwiązania — od MVP i narzędzi szytych na miarę po zaawansowane aplikacje i złożone systemy. To podejście zapewnia naszym klientom co najmniej 40% szybszą efektywność przy równoczesnym zmniejszeniu kosztów.',
    'services.title1': 'Od pomysłu do uruchomienia ',
    'services.title2': '– szybciej, kompleksowo, bez kompromisów',
    'services.subtitle': 'Wykorzystując zaawansowane technologie AI, No-Code/Low-Code, pomagamy Ci efektywnie przekształcać Twój pomysł w pełni funkcjonalne narzędzia szyte na miarę, strony internetowe, sklepy online oraz aplikacje mobilne. Poznaj pełną gamę naszych usług:',
    'services.comprehensive': 'Kompleksowe Wsparcie',
    'services.comprehensive.desc': 'Od analizy biznesowej, warsztatów, brandingu i projektowania UX/UI po rozwój i testowanie aplikacji.',
    'services.web': 'Platformy Webowe',
    'services.web.desc': 'Strony internetowe, sklepy online, CRM\'y, systemy rezerwacji, platformy e-learningowe i rozwiązania job board.',
    'services.mobile': 'Aplikacje Mobilne',
    'services.mobile.desc': 'Kompletne aplikacje mobilne na iOS i Android — dostosowane do celów biznesowych.',
    'services.ai': 'Rozwiązania AI i Automatyzacja',
    'services.ai.desc': 'Spersonalizowane ChatBoty, Generatory, Analizatory oraz Agenci AI.',
    'services.quote': 'Wyceń swój projekt',
    
    // About Section
    'about.title': 'Kim jesteśmy?',
    'about.p1': 'W SpeedCode umożliwiamy zarówno globalnym startupom, drobnym przedsiębiorcom jak i dojrzałym firmom przyspieszenie procesu tworzenia produktów dzięki zaawansowanym platformom no-code/low-code oraz sztucznej inteligencji.',
    'about.p2': 'Wykorzystując platformy no-code/low-code takie jak Bubble, FlutterFlow, Webflow, Xano, Lovable, Bolt.new i inncych, nasi klienci doświadczają płynnego, zwinnego procesu rozwoju, który skutkuje wysokiej jakości produktami cyfrowymi, w tym stronami internetowymi i sklepami online.',
    'about.p3': 'Wierzymy, że rozwój no-code/low-code oraz rozwój AI to remedium na dzisiejsze wyzwania, z którymi mierzą się rozwijające się firmy – szybkie wejście na rynek, walidacja pomysłów, iteracja i pivot z produktem, poprawa efektywności biznesowej.',
    'about.p4': 'Pomagamy firmom osiągnąć swoje cele poprzez dostarczanie zaawansowanych platform i aplikacji w inteligentniejszy sposób - wykorzystując technologię AI, no-code/low-code oraz tworzenie dedykowanych stron internetowych i sklepów e-commerce.',
    'about.values': 'Transparentna, jasna komunikacja i wzajemne zaufanie to fundament naszych wartości. Nie jesteś tylko naszym klientem. Jesteś naszym partnerem.',
    'about.slogan': 'Szybciej, lepiej, taniej!',
    'about.technologies': 'Technologie, których używamy:',
    
    // Contact Section
    'contact.hello': 'Cześć!',
    'contact.subtitle': 'Chciałbym usłyszeć o Twoim projekcie!',
    'contact.response': 'Odpowiemy na Twoją wiadomość w ciągu 24 godzin. Tak, to TAKIE proste!',
    'contact.challenges': '1. Jakie są Twoje główne wyzwania, z którymi możemy Ci pomóc?',
    'contact.challenge.development': 'Rozwój aplikacji',
    'contact.challenge.ux': 'UX/UI',
    'contact.challenge.quality': 'Zapewnienie jakości',
    'contact.challenge.integrations': 'Integracje',
    'contact.challenge.ai': 'Rozwiązania AI',
    'contact.challenge.consulting': 'Konsultacje',
    'contact.budget': '2. Jaki jest Twój budżet?',
    'contact.budget.select': 'Wybierz opcję',
    'contact.nda': '3. Czy potrzebujesz NDA?',
    'contact.details': '4. Uzupełnij szczegóły.',
    'contact.firstName': 'Imię',
    'contact.lastName': 'Nazwisko',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    'contact.company': 'Firma',
    'contact.message': 'Opowiedz nam o swoim projekcie...',
    'contact.consent1': 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez SpeedCode sp. z o.o. i oświadczam, że podanie moich danych osobowych jest dobrowolne oraz że zostałem poinformowany o prawie żądania dostępu do moich danych osobowych, ich zmiany i usunięcia.',
    'contact.consent2': 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez SpeedCode sp. z o.o. w celach marketingowych. Wyrażenie zgody jest dobrowolne. Masz prawo do wycofania zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania na podstawie zgody przed jej wycofaniem.',
    'contact.send': 'Wyślij Wiadomość',
    'contact.sending': 'Wysyłanie...',
    'contact.success': 'Dziękujemy! Formularz został wysłany.',
    'contact.success.sub': 'Odezwiemy się w ciągu 24 godzin.',
    'contact.error': 'Ups! Coś poszło nie tak.',
    'contact.error.sub': 'Spróbuj ponownie.',
    'contact.back': 'Wróć do formularza'
  },
  EN: {
    // Header
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.partnership': 'Partnership',
    'nav.letsTalk': 'Let\'s talk',
    'nav.services.title': 'See our services',
    'nav.projects.title': 'See our projects',
    'nav.about.title': 'Learn more about us',
    'nav.partnership.title': 'Become our partner',
    'nav.letsTalk.title': 'Schedule a quick call',
    'nav.language.title': 'Switch language to Polish',
    
    // Hero Section
    'hero.title1': 'We create ',
    'hero.title2': 'modern',
    'hero.title3': ' digital solutions for your business — ',
    'hero.title4': 'faster',
    'hero.title5': ' and ',
    'hero.title6': 'more efficiently',
    'hero.subtitle': 'We match technology to your needs to deliver digital products up to 40% faster and cheaper. We combine the latest AI achievements with practical no-code and low-code tools.',
    'hero.apps': 'Applications, websites and online stores — ',
    'hero.tailored': 'tailored to perfection',
    'hero.cta': 'LET\'S START THE CONVERSATION',
    'hero.advantage': 'GET THE ADVANTAGE:',
    'hero.faster': 'Faster and cheaper implementation',
    'hero.ai': 'Effectiveness through cutting-edge technology',
    'hero.support': 'Continuous availability',
    
    // Services Section
    'services.innovation.title1': 'Innovative',
    'services.innovation.title2': ' technologies,',
    'services.innovation.title3': ' faster',
    'services.innovation.title4': ' start for your business',
    'services.innovation.subtitle': 'At SpeedCode, we always choose the most effective technological path to deliver scalable, secure and high-performance solutions — from MVP and custom tools to advanced applications and complex systems. This approach ensures our clients at least 40% faster efficiency while reducing costs.',
    'services.title1': 'From idea to launch ',
    'services.title2': '– faster, comprehensive, without compromises',
    'services.subtitle': 'Using advanced AI, No-Code/Low-Code technologies, we help you efficiently transform your idea into fully functional custom tools, websites, online stores and mobile applications. Discover our full range of services:',
    'services.comprehensive': 'Comprehensive Support',
    'services.comprehensive.desc': 'From business analysis, workshops, branding and UX/UI design to application development and testing.',
    'services.web': 'Web Platforms',
    'services.web.desc': 'Websites, online stores, CRMs, booking systems, e-learning platforms and job board solutions.',
    'services.mobile': 'Mobile Applications',
    'services.mobile.desc': 'Complete mobile applications for iOS and Android — tailored to business objectives.',
    'services.ai': 'AI Solutions and Automation',
    'services.ai.desc': 'Personalized ChatBots, Generators, Analyzers and AI Agents.',
    'services.quote': 'Get a quote for your project',
    
    // About Section
    'about.title': 'Who are we?',
    'about.p1': 'At SpeedCode, we enable both global startups, small entrepreneurs and mature companies to accelerate product development through advanced no-code/low-code platforms and artificial intelligence.',
    'about.p2': 'Using no-code/low-code platforms such as Bubble, FlutterFlow, Webflow, Xano, Lovable, Bolt.new and others, our clients experience a smooth, agile development process that results in high-quality digital products, including websites and online stores.',
    'about.p3': 'We believe that no-code/low-code development and AI development are the remedy for today\'s challenges faced by growing companies – rapid market entry, idea validation, product iteration and pivot, improving business efficiency.',
    'about.p4': 'We help companies achieve their goals by delivering advanced platforms and applications in a smarter way - using AI technology, no-code/low-code and creating dedicated websites and e-commerce stores.',
    'about.values': 'Transparent, clear communication and mutual trust are the foundation of our values. You are not just our client. You are our partner.',
    'about.slogan': 'Faster, better, cheaper!',
    'about.technologies': 'Technologies we use:',
    
    // Contact Section
    'contact.hello': 'Hello!',
    'contact.subtitle': 'I\'d love to hear about your project!',
    'contact.response': 'We\'ll respond to your message within 24 hours. Yes, it\'s THAT simple!',
    'contact.challenges': '1. What are your main challenges we can help you with?',
    'contact.challenge.development': 'Application development',
    'contact.challenge.ux': 'UX/UI',
    'contact.challenge.quality': 'Quality assurance',
    'contact.challenge.integrations': 'Integrations',
    'contact.challenge.ai': 'AI Solutions',
    'contact.challenge.consulting': 'Consulting',
    'contact.budget': '2. What is your budget?',
    'contact.budget.select': 'Select option',
    'contact.nda': '3. Do you need an NDA?',
    'contact.details': '4. Fill in the details.',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.company': 'Company',
    'contact.message': 'Tell us about your project...',
    'contact.consent1': 'I consent to the processing of my personal data by SpeedCode sp. z o.o. and declare that providing my personal data is voluntary and that I have been informed about the right to request access to my personal data, their modification and deletion.',
    'contact.consent2': 'I consent to the processing of my personal data by SpeedCode sp. z o.o. for marketing purposes. Giving consent is voluntary. You have the right to withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you! Form has been sent.',
    'contact.success.sub': 'We\'ll get back to you within 24 hours.',
    'contact.error': 'Oops! Something went wrong.',
    'contact.error.sub': 'Please try again.',
    'contact.back': 'Back to form'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('PL');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};