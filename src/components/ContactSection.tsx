import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<null | boolean>(null);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ firstName?: string; contact?: string; consent1?: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitMessage("");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 🔒 Honeypot check
    const hpChecked = formData.get("hp_check");
    if (hpChecked) {
      setSubmitSuccess(false);
      setSubmitMessage(t("contact.error"));
      return;
    }

    // Client-side validation: first name required, phone or email required, consent1 required
    const firstName = String(formData.get("firstName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const hasConsent1 = formData.has("consent1");

    const nextErrors: { firstName?: string; contact?: string; consent1?: string } = {};
    if (!firstName) nextErrors.firstName = "Podaj imię";
    if (!email && !phone) nextErrors.contact = "Podaj numer telefonu lub adres e-mail";
    if (!hasConsent1) nextErrors.consent1 = "Zaznacz zgodę na kontakt";
    if (nextErrors.firstName || nextErrors.contact || nextErrors.consent1) {
      setErrors(nextErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      const CONTACT_ENDPOINT = "https://script.google.com/macros/s/AKfycbz-mlkcJNJ5hoDb0ZSwkf2PEG43_ukONHBp4cNXSKesqpq7qyGOOByDMCoi_Iwg0TP1/exec";
      const API_BASE = (import.meta as any).env?.VITE_API_BASE?.replace(/\/$/, "") || "";

      if (CONTACT_ENDPOINT) {
        // Send to external endpoint (e.g., Google Apps Script) using URL-encoded body (more reliable for GAS)
        const params = new URLSearchParams();
        const challenges: string[] = [];
        for (const [key, value] of formData.entries()) {
          if (key === "hp_check") continue;
          if (key === "challenges") challenges.push(String(value));
          else if (key !== "consent1" && key !== "consent2") params.append(key, String(value));
        }
        challenges.forEach((v) => params.append("challenges", v));
        params.append("consent1", formData.has("consent1") ? "yes" : "no");
        params.append("consent2", formData.has("consent2") ? "yes" : "no");
        const fn = String(formData.get("firstName") || "").trim();
        const ln = String(formData.get("lastName") || "").trim();
        params.append("_subject", `Nowe zgłoszenie: ${fn} ${ln}`.trim());

        const response = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
          body: params.toString(),
        });
        
        console.log("Response status:", response.status);
        const responseText = await response.text();
        console.log("Response text:", responseText);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${responseText}`);
        }
        
        // Sprawdź czy response jest prawidłowy JSON
        try {
          const result = JSON.parse(responseText);
          if (!result.ok) {
            throw new Error(result.error || "Błąd serwera");
          }
        } catch (parseError) {
          console.warn("Response is not JSON, assuming success");
        }
      } else {
        // Default: send JSON to our backend
        const payload: Record<string, any> = {};
        for (const [key, value] of formData.entries()) {
          if (key === "hp_check") continue;
          if (key === "challenges") {
            if (!payload.challenges) payload.challenges = [];
            payload.challenges.push(String(value));
          } else if (key !== "consent1" && key !== "consent2") {
            payload[key] = String(value);
          }
        }
        payload.consent1 = formData.has("consent1");
        payload.consent2 = formData.has("consent2");

        const res = await fetch(`${API_BASE}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      }

      setSubmitSuccess(true);
      setSubmitMessage(t("contact.success"));
      form.reset();
    } catch (err) {
      console.error(err);
      setSubmitSuccess(false);
      setSubmitMessage(t("contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const challenges = [
    t("contact.challenge.development"),
    t("contact.challenge.ux"),
    t("contact.challenge.quality"),
    t("contact.challenge.integrations"),
    t("contact.challenge.ai"),
    t("contact.challenge.consulting"),
    t("contact.challenge.site"),
    t("contact.challenge.ecom"),
    t("contact.challenge.partnership"),
    t("contact.challenge.projectPrice"),
  ];

  const budgets = [
    t("contact.budgetOptions.small"),
    t("contact.budgetOptions.medium"),
    t("contact.budgetOptions.large"),
    t("contact.budgetOptions.xlarge"),
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-4 text-foreground">
                {t("contact.hello")}
              </h2>
              <p className="text-xl text-foreground mb-6">
                {t("contact.subtitle")}
              </p>
              <p className="text-muted-foreground mb-8">
                {t("contact.response")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/80 border border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                    👨‍💼
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Kamil Półkośnik</h3>
                    <p className="text-muted-foreground">
                      CEO & Head of Technology / SpeedCode
                    </p>
                    <div className="flex gap-2">
                      <a href="tel:+48600469129">
                        <Button
                          className="bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px] mt-2 px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)]"
                          title={"+48 600 469 129"}
                          aria-label={`Zadzwoń +48 600 469 129`}
                        >
                          +48 600 469 129
                        </Button>
                      </a>
                      <a href="mailto:kontakt@speedcode.eu">
                        <Button
                          className="bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px] mt-2 px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)]"
                          title="kontakt@speedcode.eu"
                          aria-label="Wyślij email do kontakt@speedcode.eu"
                        >
                          kontakt@speedcode.eu
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 border border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                    👨‍💼
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">
                      Aureliusz Stelmaszek
                    </h3>
                    <p className="text-muted-foreground">
                      CEO & Head of Business Operations / SpeedCode
                    </p>
                    <div className="flex gap-2">
                      <a href="tel:+48533821998">
                        <Button
                          className="bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px] mt-2 px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)]"
                          title={"+48 533 821 998"}
                          aria-label={`Zadzwoń +48 533 821 998`}
                        >
                          +48 533 821 998
                        </Button>
                      </a>
                      <a href="mailto:aureliusz@speedcode.eu">
                        <Button
                          className="bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[20px] mt-2 px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(47,107,255,0.45)]"
                          title="aureliusz@speedcode.eu"
                          aria-label="Wyślij email do aureliusz@speedcode.eu"
                        >
                          aureliusz@speedcode.eu
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form - Hidden */}
          <Card className="p-8 hidden">
            {isSubmitting || submitSuccess !== null ? (
              <div className="p-10 flex flex-col items-center justify-center text-center min-h-[320px]">
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-10 w-10 mb-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    <p className="text-foreground font-medium">
                      {t("contact.sending")}
                    </p>
                  </>
                ) : submitSuccess ? (
                  <>
                    <div className="h-16 w-16 mb-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl">
                      ✅
                    </div>
                    <p className="text-foreground font-semibold mb-2">
                      {t("contact.success")}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {t("contact.success.sub")}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="h-16 w-16 mb-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-3xl">
                      ⚠️
                    </div>
                    <p className="text-foreground font-semibold mb-2">
                      {t("contact.error")}
                    </p>
                    <p className="text-muted-foreground">
                      {t("contact.error.sub")}
                    </p>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="underline"
                        onClick={() => {
                          setSubmitSuccess(null);
                          setSubmitMessage("");
                        }}
                      >
                        {t("contact.back")}
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* 🔒 Honeypot field (hidden from users) */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
                >
                  <label>
                    Nie zaznaczaj tego pola
                    <input
                      type="checkbox"
                      name="hp_check"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                {/* Step 1 */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">
                    {t("contact.challenges")}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id={`challenge-${index}`}
                          name="challenges"
                          value={challenge}
                          className="h-4 w-4 border-border rounded"
                        />
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
                    {t("contact.budget")}
                  </h3>
                  <select
                    name="budget"
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                  >
                    <option>{t("contact.budget.select")}</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 3 */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">
                    {t("contact.nda")}
                  </h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="nda-no"
                        name="nda"
                        value="no"
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="nda-no"
                        className="font-bold cursor-pointer"
                      >
                        {t("contact.nda.no")}
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="nda-yes"
                        name="nda"
                        value="yes"
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="nda-yes"
                        className="font-bold cursor-pointer"
                      >
                        {t("contact.nda.yes")}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">
                    {t("contact.details")}
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="firstName"
                        placeholder={t("contact.firstName")}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? "err-firstName" : undefined}
                      />
                      <Input
                        name="lastName"
                        placeholder={t("contact.lastName")}
                      />
                    </div>
                    {errors.firstName ? (
                      <p id="err-firstName" className="text-sm font-medium text-destructive">{errors.firstName}</p>
                    ) : null}
                    <Input
                      name="email"
                      placeholder={t("contact.email")}
                      type="email"
                      aria-invalid={!!errors.contact}
                    />
                    <Input
                      name="phone"
                      placeholder={t("contact.phone")}
                      type="tel"
                      aria-invalid={!!errors.contact}
                    />
                    {errors.contact ? (
                      <p className="text-sm font-medium text-destructive">{errors.contact}</p>
                    ) : null}
                    <Input name="company" placeholder={t("contact.company")} />
                    <Textarea
                      name="message"
                      placeholder={t("contact.message")}
                      rows={4}
                    />
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent1"
                      name="consent1"
                      value="yes"
                      className="mt-1 h-4 w-4"
                      aria-invalid={!!errors.consent1}
                    />
                    <label
                      htmlFor="consent1"
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      {t("contact.consent1")}
                    </label>
                  </div>
                  {errors.consent1 ? (
                    <p className="text-sm font-medium text-destructive">{errors.consent1}</p>
                  ) : null}
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent2"
                      name="consent2"
                      value="yes"
                      className="mt-1 h-4 w-4"
                    />
                    <label
                      htmlFor="consent2"
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      {t("contact.consent2")}
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-variant"
                >
                  {t("contact.send")}
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
