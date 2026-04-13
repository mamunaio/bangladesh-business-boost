import { useReveal } from "@/hooks/use-reveal";

const technologies = [
  { name: "React", icon: "⚛️", color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Next.js", icon: "▲", color: "from-gray-500/20 to-gray-300/20" },
  { name: "Node.js", icon: "🟢", color: "from-green-500/20 to-emerald-500/20" },
  { name: "WordPress", icon: "📝", color: "from-blue-400/20 to-indigo-400/20" },
  { name: "Laravel", icon: "🔺", color: "from-red-500/20 to-orange-500/20" },
  { name: "Python", icon: "🐍", color: "from-yellow-500/20 to-blue-500/20" },
  { name: "Flutter", icon: "💙", color: "from-sky-500/20 to-blue-500/20" },
  { name: "MongoDB", icon: "🍃", color: "from-green-600/20 to-green-400/20" },
  { name: "MySQL", icon: "🐬", color: "from-blue-600/20 to-orange-400/20" },
  { name: "AWS", icon: "☁️", color: "from-orange-500/20 to-yellow-400/20" },
  { name: "Figma", icon: "🎨", color: "from-purple-500/20 to-pink-500/20" },
  { name: "Tailwind", icon: "💨", color: "from-cyan-500/20 to-teal-500/20" },
];

const TechnologiesSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-glow/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-20 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Technologies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Tools We <span className="gradient-text">Master</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We use modern, industry-leading technologies to build fast, scalable, and secure solutions.
          </p>
        </div>

        {/* Hex-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className={`group relative flex flex-col items-center gap-4 p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 cursor-default reveal-scale ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative z-10">
                <span className="text-4xl block group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-500 ease-out">
                  {tech.icon}
                </span>
              </div>
              
              {/* Name */}
              <span className="relative z-10 text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </span>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow group-hover:w-3/4 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
