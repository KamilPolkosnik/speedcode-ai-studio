import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<null | boolean>(null);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      setSubmitSuccess(true);
      setSubmitMessage("Dziękujemy! Formularz został wysłany.");
      form.reset();
    } catch (err) {
      console.error(err);
      setSubmitSuccess(false);
      setSubmitMessage("Ups! Coś poszło nie tak. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 bg-background">
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
            {(isSubmitting || submitSuccess !== null) ? (
              <div className="p-10 flex flex-col items-center justify-center text-center min-h-[320px]">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-10 w-10 mb-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                    </svg>
                    <p className="text-foreground font-medium">Wysyłanie...</p>
                  </>
                ) : submitSuccess ? (
                  <>
                    <div className="h-16 w-16 mb-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl">✅</div>
                    <p className="text-foreground font-semibold mb-2">Dziękujemy! Formularz został wysłany.</p>
                    <p className="text-muted-foreground mb-6">Odezwiemy się w ciągu 24 godzin.</p>
                  </>
                ) : (
                  <>
                    <div className="h-16 w-16 mb-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-3xl">⚠️</div>
                    <p className="text-foreground font-semibold mb-2">Ups! Coś poszło nie tak.</p>
                    <p className="text-muted-foreground">Spróbuj ponownie.</p>
                    <div className="mt-6">
                      <button type="button" className="underline" onClick={() => { setSubmitSuccess(null); setSubmitMessage(""); }}>Wróć do formularza</button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Step 1 */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">1. Jakie są Twoje główne wyzwania, z którymi możemy Ci pomóc?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {challenges.map((challenge, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input type="checkbox" id={`challenge-${index}`} name="challenges" value={challenge} className="h-4 w-4 border-border rounded" />
                        <label htmlFor={`challenge-${index}`} className="text-sm text-foreground cursor-pointer">{challenge}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">2. Jaki jest Twój budżet?</h3>
                  <select name="budget" className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                    <option>Wybierz opcję</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                {/* Step 3 */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">3. Czy potrzebujesz NDA?</h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="nda-no" name="nda" value="no" className="h-4 w-4" />
                      <label htmlFor="nda-no" className="font-bold cursor-pointer">NIE</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="nda-yes" name="nda" value="yes" className="h-4 w-4" />
                      <label htmlFor="nda-yes" className="font-bold cursor-pointer">TAK</label>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">4. Uzupełnij szczegóły.</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="firstName" placeholder="Imię" />
                      <Input name="lastName" placeholder="Nazwisko" />
                    </div>
                    <Input name="email" placeholder="Email" type="email" />
                    <Input name="phone" placeholder="Telefon" type="tel" />
                    <Input name="company" placeholder="Firma" />
                    <Textarea name="message" placeholder="Opowiedz nam o swoim projekcie..." rows={4} />
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent1" name="consent1" value="yes" className="mt-1 h-4 w-4" />
                    <label htmlFor="consent1" className="text-sm text-muted-foreground cursor-pointer">Wyrażam zgodę na przetwarzanie moich danych osobowych przez SpeedCode sp. z o.o. i oświadczam, że podanie moich danych osobowych jest dobrowolne oraz że zostałem poinformowany o prawie żądania dostępu do moich danych osobowych, ich zmiany i usunięcia.</label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent2" name="consent2" value="yes" className="mt-1 h-4 w-4" />
                    <label htmlFor="consent2" className="text-sm text-muted-foreground cursor-pointer">Wyrażam zgodę na przetwarzanie moich danych osobowych przez SpeedCode sp. z o.o. w celach marketingowych. Wyrażenie zgody jest dobrowolne. Masz prawo do wycofania zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania na podstawie zgody przed jej wycofaniem.</label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary-variant">
                  Wyślij Wiadomość
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;