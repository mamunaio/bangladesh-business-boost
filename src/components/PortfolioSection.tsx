import { ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const projects = [
  { title: "Rahim Electronics", category: "E-Commerce", image: "https://codenextit.com/assets/img/home_hero_slide_01.webp" },
  { title: "Fashion Boutique", category: "Web Design", image: "https://codenextit.com/assets/img/home_hero_slide_02.webp" },
  { title: "Trading Company", category: "Software", image: "https://codenextit.com/assets/img/home_hero_slide_03.webp" },
  { title: "Restaurant Website", category: "Web Design", image: "https://codenextit.com/assets/img/home_hero_slide_04.webp" },
  { title: "Real Estate Portal", category: "Web Development", image: "https://codenextit.com/assets/img/home_hero_slide_05.webp" },
  { title: "Education Platform", category: "Software", image: "https://codenextit.com/assets/img/home_hero_slide_06.webp" },
];

const PortfolioSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Recent{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">See what we've built for businesses like yours.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer reveal-scale ${visible ? "visible" : ""} stagger-${i + 1}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold text-primary-foreground mt-1 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
