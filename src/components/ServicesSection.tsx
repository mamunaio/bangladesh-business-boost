import { Globe, ShoppingCart, Search, Wrench, Palette, Code, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: Globe, title: "Web Design", description: "Beautiful, mobile-friendly websites that represent your brand and attract customers.", gradient: "from-violet-500 to-purple-600", iconBg: "bg-violet-500/10", delay: "0s" },
  { icon: ShoppingCart, title: "E-Commerce", description: "Online stores with secure payment integration to sell your products 24/7.", gradient: "from-cyan-400 to-teal-500", iconBg: "bg-cyan-500/10", delay: "0.5s" },
  { icon: Search, title: "SEO Services", description: "Get found on Google. We optimize your site to rank higher and drive more traffic.", gradient: "from-amber-400 to-orange-500", iconBg: "bg-amber-500/10", delay: "1s" },
  { icon: Code, title: "Software Development", description: "Custom software solutions to streamline your business operations and save time.", gradient: "from-blue-500 to-indigo-600", iconBg: "bg-blue-500/10", delay: "1.5s" },
  { icon: Palette, title: "UI/UX Design", description: "User-focused designs that make your website easy to use and visually appealing.", gradient: "from-pink-500 to-rose-500", iconBg: "bg-pink-500/10", delay: "2s" },
  { icon: Wrench, title: "Maintenance", description: "Ongoing website updates, security, and technical support to keep things running smooth.", gradient: "from-emerald-400 to-green-600", iconBg: "bg-emerald-500/10", delay: "2.5s" },
];

const ServicesSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[300px] h-[300px] bg-primary-glow/5 rounded-full blur-3xl" />

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
              className={`group bg-card rounded-2xl border p-7 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden reveal ${visible ? "visible" : ""} stagger-${i + 1}`}
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

              {/* Animated icon container */}
              <div className="relative mb-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 animate-icon-pulse`} style={{ animationDelay: service.delay }}>
                  <service.icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
                </div>
                {/* Glow ring behind icon */}
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
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
