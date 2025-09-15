import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/hooks/useLanguage";

const ContactSection = () => {
  const { t } = useLanguage();
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
      setSubmitMessage(t('contact.success'));
      form.reset();
    } catch (err) {
      console.error(err);
      setSubmitSuccess(false);
      setSubmitMessage(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const challenges = [
    t('contact.challenge.development'),
    t('contact.challenge.ux'),
    t('contact.challenge.quality'),
    t('contact.challenge.integrations'),
    t('contact.challenge.ai'),
    t('contact.challenge.consulting')
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
                {t('contact.hello')}
              </h2>
              <p className="text-xl text-foreground mb-6">
                {t('contact.subtitle')}
              </p>
              <p className="text-muted-foreground mb-8">
                {t('contact.response')}
              </p>
            </div>

            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                  👨‍💼
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Kamil Półkośnik</h3>
                  <p className="text-muted-foreground">CEO & Head of Technology / SpeedCode.io</p>
                  <p className="text-primary font-semibold">M: +48 600 469 129</p>
                </div>
                                <div>
                  <h3 className="font-bold text-foreground">Aureliusz Stelmaszek</h3>
                  <p className="text-muted-foreground">CEO & Head of Business Operations / SpeedCode.io</p>
                  <p className="text-primary font-semibold">M: +48 533 821 998</p>
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
                  <h3 className="font-bold text-foreground mb-4">{t('contact.challenges')}</h3>
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
                  <h3 className="font-bold text-foreground mb-4">{t('contact.budget')}</h3>
                  <select name="budget" className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                    <option>{t('contact.budget.select')}</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                {/* Step 3 */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">{t('contact.nda')}</h3>
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
                  <h3 className="font-bold text-foreground mb-4">{t('contact.details')}</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="firstName" placeholder={t('contact.firstName')} />
                      <Input name="lastName" placeholder={t('contact.lastName')} />
                    </div>
                    <Input name="email" placeholder={t('contact.email')} type="email" />
                    <Input name="phone" placeholder={t('contact.phone')} type="tel" />
                    <Input name="company" placeholder={t('contact.company')} />
                    <Textarea name="message" placeholder={t('contact.message')} rows={4} />
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent1" name="consent1" value="yes" className="mt-1 h-4 w-4" />
                    <label htmlFor="consent1" className="text-sm text-muted-foreground cursor-pointer">{t('contact.consent1')}</label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent2" name="consent2" value="yes" className="mt-1 h-4 w-4" />
                    <label htmlFor="consent2" className="text-sm text-muted-foreground cursor-pointer">{t('contact.consent2')}</label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary-variant">
                  {t('contact.send')}
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