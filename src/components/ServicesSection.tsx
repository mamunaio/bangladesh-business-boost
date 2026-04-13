import { Globe, ShoppingCart, Search, Wrench, Palette, Code } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Beautiful, mobile-friendly websites that represent your brand and attract customers.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Online stores with secure payment integration to sell your products 24/7.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Get found on Google. We optimize your site to rank higher and drive more traffic.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions to streamline your business operations and save time.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-focused designs that make your website easy to use and visually appealing.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing website updates, security, and technical support to keep things running smooth.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything Your Business Needs Online
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From a simple website to a full e-commerce store — we provide affordable digital solutions for businesses in Bangladesh.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
