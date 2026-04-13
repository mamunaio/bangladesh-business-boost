import { Star, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    name: "Rahim Uddin",
    business: "Rahim Electronics, Dhaka",
    text: "Code Next IT built our website within a week. Very professional and affordable. Our online orders increased by 40% in just two months!",
    avatar: "R",
  },
  {
    name: "Fatima Akter",
    business: "Fatima's Boutique, Chittagong",
    text: "They understood exactly what my business needed. The design is beautiful and my customers love shopping online now. Highly recommended!",
    avatar: "F",
  },
  {
    name: "Kamal Hossain",
    business: "Hossain & Sons Trading, Sylhet",
    text: "Great communication in Bangla and English. They delivered on time and continue to support us with updates. Best IT company for local businesses.",
    avatar: "K",
  },
];

const TrustSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Trusted by Local Businesses
            <br />
            <span className="gradient-text">Across Bangladesh</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group bg-card rounded-2xl border p-7 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-500 reveal ${visible ? "visible" : ""} stagger-${i + 1}`}
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
