import { DollarSign, Zap, MessageCircle, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality web solutions at prices that fit local business budgets. No hidden costs.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most projects delivered within 7-14 days. We value your time and deadlines.",
  },
  {
    icon: MessageCircle,
    title: "Bangla & English Support",
    description: "Communicate with us in your preferred language. We're local and easy to reach.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "We don't disappear after delivery. Get continuous support and maintenance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Local Technology Partner
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We understand the needs of Bangladeshi businesses. Our team provides personalized, reliable, and affordable IT solutions to help your business succeed online.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-card rounded-lg border p-5">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                  <reason.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
