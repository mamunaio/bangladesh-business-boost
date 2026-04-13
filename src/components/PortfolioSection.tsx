const projects = [
  {
    title: "Rahim Electronics",
    category: "E-Commerce",
    image: "https://codenextit.com/assets/img/home_hero_slide_01.webp",
  },
  {
    title: "Fashion Boutique",
    category: "Web Design",
    image: "https://codenextit.com/assets/img/home_hero_slide_02.webp",
  },
  {
    title: "Trading Company",
    category: "Software",
    image: "https://codenextit.com/assets/img/home_hero_slide_03.webp",
  },
  {
    title: "Restaurant Website",
    category: "Web Design",
    image: "https://codenextit.com/assets/img/home_hero_slide_04.webp",
  },
  {
    title: "Real Estate Portal",
    category: "Web Development",
    image: "https://codenextit.com/assets/img/home_hero_slide_05.webp",
  },
  {
    title: "Education Platform",
    category: "Software",
    image: "https://codenextit.com/assets/img/home_hero_slide_06.webp",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Recent Projects
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            See what we've built for businesses like yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-primary">{project.category}</span>
                <h3 className="text-base font-semibold text-foreground mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
