import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const plans = [
  {
    name: "Basic",
    price: "৳15,000",
    description: "Perfect for small businesses just getting started online.",
    features: ["5-page responsive website", "Mobile-friendly design", "Contact form", "Basic SEO setup", "1 month free support"],
    popular: false,
  },
  {
    name: "Standard",
    price: "৳30,000",
    description: "Great for growing businesses that need more features.",
    features: ["10-page responsive website", "Custom UI/UX design", "SEO optimization", "Social media integration", "WhatsApp chat widget", "3 months free support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "৳60,000",
    description: "Full solution for businesses ready to sell online.",
    features: ["E-commerce website", "Payment gateway integration", "Product management system", "Advanced SEO", "Admin dashboard", "6 months free support", "Free domain & hosting (1 year)"],
    popular: false,
  },
];

const PricingSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Transparent &{" "}
            <span className="gradient-text">Affordable</span> Packages
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">No hidden fees. Choose a plan that fits your budget.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`bg-card rounded-2xl border p-7 flex flex-col relative transition-all duration-500 hover:-translate-y-2 reveal ${visible ? "visible" : ""} stagger-${i + 1} ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/20 scale-[1.03] md:scale-105"
                  : "hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-black text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-2">one-time</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/+8801833925304" target="_blank" rel="noopener noreferrer" className="mt-8">
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                  Get Started
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
