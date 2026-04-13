import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahim Uddin",
    business: "Rahim Electronics, Dhaka",
    text: "Code Next IT built our website within a week. Very professional and affordable. Our online orders increased by 40% in just two months!",
  },
  {
    name: "Fatima Akter",
    business: "Fatima's Boutique, Chittagong",
    text: "They understood exactly what my business needed. The design is beautiful and my customers love shopping online now. Highly recommended!",
  },
  {
    name: "Kamal Hossain",
    business: "Hossain & Sons Trading, Sylhet",
    text: "Great communication in Bangla and English. They delivered on time and continue to support us with updates. Best IT company for local businesses.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Client Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Local Businesses Across Bangladesh
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-lg border p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
