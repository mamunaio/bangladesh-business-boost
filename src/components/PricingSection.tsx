import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "৳15,000",
    description: "Perfect for small businesses just getting started online.",
    features: [
      "5-page responsive website",
      "Mobile-friendly design",
      "Contact form",
      "Basic SEO setup",
      "1 month free support",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "৳30,000",
    description: "Great for growing businesses that need more features.",
    features: [
      "10-page responsive website",
      "Custom UI/UX design",
      "SEO optimization",
      "Social media integration",
      "WhatsApp chat widget",
      "3 months free support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "৳60,000",
    description: "Full solution for businesses ready to sell online.",
    features: [
      "E-commerce website",
      "Payment gateway integration",
      "Product management system",
      "Advanced SEO",
      "Admin dashboard",
      "6 months free support",
      "Free domain & hosting (1 year)",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Transparent & Affordable Packages
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            No hidden fees. Choose a plan that fits your budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card rounded-lg border p-6 flex flex-col relative ${
                plan.popular ? "border-primary shadow-lg ring-1 ring-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-3">
                <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-1">one-time</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/+8801833925304" target="_blank" rel="noopener noreferrer" className="mt-6">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
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
