import { useReveal } from "@/hooks/use-reveal";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "WordPress", icon: "📝" },
  { name: "Laravel", icon: "🔺" },
  { name: "Python", icon: "🐍" },
  { name: "Flutter", icon: "💙" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🐬" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🎨" },
  { name: "Tailwind", icon: "💨" },
];

const TechnologiesSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Technologies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Tools We <span className="gradient-text">Master</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We use modern, industry-leading technologies to build fast, scalable, and secure solutions.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className={`group flex flex-col items-center gap-3 p-5 bg-card rounded-2xl border hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 cursor-default reveal-scale ${visible ? "visible" : ""} stagger-${Math.min(i + 1, 6)}`}
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
