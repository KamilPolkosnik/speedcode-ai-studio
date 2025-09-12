import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const ContactSection = () => {
  const challenges = [
    "Development",
    "UX/UI",
    "QA",
    "Integrations",
    "AI Solutions",
    "Consultancy"
  ];

  const budgets = [
    "$10,000 and less",
    "$11,000 - $25,000", 
    "$26,000 - $50,000",
    "More than $50,000"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-4 text-foreground">
                Hey!
              </h2>
              <p className="text-xl text-foreground mb-6">
                I'd love to hear about your project!
              </p>
              <p className="text-muted-foreground mb-8">
                We will answer your message within 24 hours. Yes, it's THAT easy!
              </p>
            </div>

            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                  👨‍💼
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Emil Bednarczyk</h3>
                  <p className="text-muted-foreground">Client Partner / SpeedCode.io</p>
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
                  1. What are your main challenges that we can help you with?
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
                  2. What is your budget?
                </h3>
                <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                  <option>Choose an option</option>
                  {budgets.map((budget, index) => (
                    <option key={index} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="font-bold text-foreground mb-4">
                  3. Do you need an NDA?
                </h3>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nda-no" />
                    <label htmlFor="nda-no" className="font-bold cursor-pointer">NO</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nda-yes" />
                    <label htmlFor="nda-yes" className="font-bold cursor-pointer">YES</label>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <h3 className="font-bold text-foreground mb-4">
                  4. Fill in the details.
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Phone" type="tel" />
                  <Input placeholder="Company" />
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                </div>
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="consent1" className="mt-1" />
                  <label htmlFor="consent1" className="text-sm text-muted-foreground cursor-pointer">
                    I consent to the processing of my personal data by SpeedCode sp. z o.o. and I declare that the provision of my personal data is voluntary and that I have been informed about the right to request access to my personal data, change it and delete it.
                  </label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="consent2" className="mt-1" />
                  <label htmlFor="consent2" className="text-sm text-muted-foreground cursor-pointer">
                    I consent to the processing of my personal data by SpeedCode sp. z o.o. for marketing purposes. Expressing consent is voluntary. You have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.
                  </label>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary-variant"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;