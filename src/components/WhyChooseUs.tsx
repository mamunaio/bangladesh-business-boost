import { DollarSign, Zap, MessageCircle, HeadphonesIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const reasons = [
  { icon: DollarSign, title: "Affordable Pricing", description: "Quality web solutions at prices that fit local business budgets. No hidden costs.", gradient: "from-emerald-400 to-green-500", delay: "0s" },
  { icon: Zap, title: "Fast Delivery", description: "Most projects delivered within 7-14 days. We value your time and deadlines.", gradient: "from-amber-400 to-orange-500", delay: "0.3s" },
  { icon: MessageCircle, title: "Bangla & English", description: "Communicate with us in your preferred language. We're local and easy to reach.", gradient: "from-blue-400 to-indigo-500", delay: "0.6s" },
  { icon: HeadphonesIcon, title: "Ongoing Support", description: "We don't disappear after delivery. Get continuous support and maintenance.", gradient: "from-violet-400 to-purple-600", delay: "0.9s" },
];

const WhyChooseUs = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="why-us" className="py-20 md:py-32 gradient-hero text-hero-foreground relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`reveal-left ${visible ? "visible" : ""}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Your Local
              <br />
              <span className="gradient-text">Technology Partner</span>
            </h2>
            <p className="mt-6 text-hero-foreground/60 text-lg leading-relaxed max-w-lg">
              We understand the needs of Bangladeshi businesses. Our team provides personalized, reliable, and affordable IT solutions to help your business succeed online.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                {["R", "F", "K", "A"].map((l, i) => (
                  <div key={i} className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm border-2 border-hero">
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-hero-foreground">50+ Happy Clients</p>
                <p className="text-sm text-hero-foreground/50">and counting...</p>
              </div>
            </div>
          </div>

          <div className={`grid sm:grid-cols-2 gap-5 reveal-right ${visible ? "visible" : ""}`}>
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className={`glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group stagger-${i + 1}`}
              >
                <div className="relative mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg animate-icon-float`} style={{ animationDelay: reason.delay }}>
                    <reason.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />
                </div>
                <h3 className="font-bold text-hero-foreground mb-1.5">{reason.title}</h3>
                <p className="text-sm text-hero-foreground/50 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
