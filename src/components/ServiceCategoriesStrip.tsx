import { Globe, ShoppingCart, Search, Code, Palette, Wrench, Server, Smartphone } from "lucide-react";

const categories = [
  { icon: Globe, label: "Web Design" },
  { icon: Code, label: "Development" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Search, label: "SEO" },
  { icon: Server, label: "Hosting" },
  { icon: Smartphone, label: "App Dev" },
  { icon: Wrench, label: "Maintenance" },
];

const ServiceCategoriesStrip = () => {
  return (
    <section className="relative z-10 -mt-6">
      <div className="container">
        <div className="bg-card/80 backdrop-blur-xl border rounded-2xl shadow-xl shadow-primary/5 p-4 md:p-6">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {categories.map((cat) => (
              <a
                key={cat.label}
                href="#services"
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-glow/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                  <cat.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">{cat.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesStrip;
