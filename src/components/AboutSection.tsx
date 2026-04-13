import { Lightbulb, Target, Users, TrendingUp } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const AboutSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`reveal-left ${visible ? "visible" : ""}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              We Believe in
              <br />
              <span className="gradient-text">Technology & Innovation</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Code Next IT is a Bangladeshi technology company dedicated to helping local businesses establish a powerful online presence. We combine creativity with cutting-edge technology to deliver solutions that drive real results.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From small shops in Dhaka to enterprises in Chittagong, we've helped 50+ businesses transform their digital presence with affordable, high-quality web solutions.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Clients Served" },
                { value: "100+", label: "Projects Completed" },
                { value: "3+", label: "Years Experience" },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl border p-4 text-center hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-5 reveal-right ${visible ? "visible" : ""}`}>
            {[
              { icon: Lightbulb, title: "Innovation First", desc: "We stay ahead with the latest technologies and trends.", gradient: "from-amber-400 to-orange-500" },
              { icon: Target, title: "Goal Oriented", desc: "Every project is designed to achieve your business goals.", gradient: "from-violet-500 to-purple-600" },
              { icon: Users, title: "Client Focused", desc: "Your satisfaction is our top priority, always.", gradient: "from-cyan-400 to-teal-500" },
              { icon: TrendingUp, title: "Growth Driven", desc: "We build solutions that scale with your business.", gradient: "from-emerald-400 to-green-500" },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`bg-card rounded-2xl border p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group stagger-${i + 1}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg mb-4 animate-icon-float`} style={{ animationDelay: `${i * 0.3}s` }}>
                  <item.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
