import { Globe, ShoppingCart, Search, Wrench, Palette, Code, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: Globe, title: "Web Design", description: "Beautiful, mobile-friendly websites that represent your brand and attract customers.", color: "from-blue-500 to-blue-600" },
  { icon: ShoppingCart, title: "E-Commerce", description: "Online stores with secure payment integration to sell your products 24/7.", color: "from-emerald-500 to-emerald-600" },
  { icon: Search, title: "SEO Services", description: "Get found on Google. We optimize your site to rank higher and drive more traffic.", color: "from-amber-500 to-orange-500" },
  { icon: Code, title: "Software Development", description: "Custom software solutions to streamline your business operations and save time.", color: "from-violet-500 to-purple-600" },
  { icon: Palette, title: "UI/UX Design", description: "User-focused designs that make your website easy to use and visually appealing.", color: "from-pink-500 to-rose-500" },
  { icon: Wrench, title: "Maintenance", description: "Ongoing website updates, security, and technical support to keep things running smooth.", color: "from-cyan-500 to-teal-500" },
];

const ServicesSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything Your Business
            <br />
            <span className="gradient-text">Needs Online</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From a simple website to a full e-commerce store — we provide affordable digital solutions for businesses in Bangladesh.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl border p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden reveal ${visible ? "visible" : ""} stagger-${i + 1}`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
