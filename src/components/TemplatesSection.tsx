import { ExternalLink, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const templates = [
  { title: "Business Pro Theme", platform: "ThemeForest", rating: 4.8, sales: "2.1k", price: "$49", image: "https://codenextit.com/assets/img/home_hero_slide_01.webp" },
  { title: "E-Commerce starter", platform: "TemplateMonster", rating: 4.7, sales: "1.5k", price: "$39", image: "https://codenextit.com/assets/img/home_hero_slide_02.webp" },
  { title: "Corporate Theme", platform: "ThemeForest", rating: 4.9, sales: "3.2k", price: "$59", image: "https://codenextit.com/assets/img/home_hero_slide_03.webp" },
  { title: "Portfolio starter", platform: "TemplateMonster", rating: 4.6, sales: "890", price: "$29", image: "https://codenextit.com/assets/img/home_hero_slide_04.webp" },
];

const TemplatesSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Templates & Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Ready-Made <span className="gradient-text">Templates</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Explore our premium templates on ThemeForest & TemplateMonster. Get started quickly with professional designs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((t, i) => (
            <div
              key={t.title}
              className={`group bg-card rounded-2xl border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 reveal-scale ${visible ? "visible" : ""} stagger-${i + 1}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-primary">{t.platform}</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{t.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium text-foreground">{t.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">•</span>
                  <div className="flex items-center gap-1">
                    <ShoppingBag className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{t.sales} sales</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black gradient-text">{t.price}</span>
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                    View <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
