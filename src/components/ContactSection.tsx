import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const ContactSection = () => {
  const challenges = [
    "Rozwój aplikacji",
    "UX/UI",
    "Zapewnienie jakości",
    "Integracje",
    "Rozwiązania AI",
    "Konsultacje"
  ];

  const budgets = [
    "10 000$ i mniej",
    "11 000$ - 25 000$", 
    "26 000$ - 50 000$",
    "Powyżej 50 000$"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-4 text-foreground">
                Cześć!
              </h2>
              <p className="text-xl text-foreground mb-6">
                Chciałbym usłyszeć o Twoim projekcie!
              </p>
              <p className="text-muted-foreground mb-8">
                Odpowiemy na Twoją wiadomość w ciągu 24 godzin. Tak, to TAKIE proste!
              </p>
            </div>

            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                  👨‍💼
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Emil Bednarczyk</h3>
                  <p className="text-muted-foreground">Partner Kliencki / SpeedCode.io</p>
                  <p className="text-primary font-semibold">M: +48 792 015 688</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form className="space-y-8">
              {/* Step 1 */}
              <div>
                <h3 className="font-bold text-foreground mb-4">
                  1. Jakie są Twoje główne wyzwania, z którymi możemy Ci pomóc?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`challenge-${index}`} />
                      <label 
                        htmlFor={`challenge-${index}`}
                        className="text-sm text-foreground cursor-pointer"
                      >
                        {challenge}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="font-bold text-foreground mb-4">
                  2. Jaki jest Twój budżet?
                </h3>
                <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                  <option>Wybierz opcję</option>
                  {budgets.map((budget, index) => (
                    <option key={index} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="font-bold text-foreground mb-4">
                  3. Czy potrzebujesz NDA?
                </h3>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nda-no" />
                    <label htmlFor="nda-no" className="font-bold cursor-pointer">NIE</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nda-yes" />
                    <label htmlFor="nda-yes" className="font-bold cursor-pointer">TAK</label>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <h3 className="font-bold text-foreground mb-4">
                  4. Uzupełnij szczegóły.
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Imię" />
                    <Input placeholder="Nazwisko" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Telefon" type="tel" />
                  <Input placeholder="Firma" />
                  <Textarea placeholder="Opowiedz nam o swoim projekcie..." rows={4} />
                </div>
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="consent1" className="mt-1" />
                  <label htmlFor="consent1" className="text-sm text-muted-foreground cursor-pointer">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez SpeedCode sp. z o.o. i oświadczam, że podanie moich danych osobowych jest dobrowolne oraz że zostałem poinformowany o prawie żądania dostępu do moich danych osobowych, ich zmiany i usunięcia.
                  </label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="consent2" className="mt-1" />
                  <label htmlFor="consent2" className="text-sm text-muted-foreground cursor-pointer">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez SpeedCode sp. z o.o. w celach marketingowych. Wyrażenie zgody jest dobrowolne. Masz prawo do wycofania zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania na podstawie zgody przed jej wycofaniem.
                  </label>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary-variant"
              >
                Wyślij Wiadomość
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;