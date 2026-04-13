import { FileSearch, PenTool, Code, Rocket } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { icon: FileSearch, title: "Discovery", desc: "We learn about your business, goals, and target audience to create the perfect plan.", number: "01", gradient: "from-violet-500 to-purple-600" },
  { icon: PenTool, title: "Design", desc: "Our designers create beautiful mockups tailored to your brand and user needs.", number: "02", gradient: "from-cyan-400 to-teal-500" },
  { icon: Code, title: "Development", desc: "We build your project using modern technologies with clean, optimized code.", number: "03", gradient: "from-amber-400 to-orange-500" },
  { icon: Rocket, title: "Launch & Support", desc: "We deploy your project and provide ongoing support to ensure everything runs smoothly.", number: "04", gradient: "from-emerald-400 to-green-500" },
];

const WorkingProcessSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            The Working <span className="gradient-text">Process</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A simple, transparent process from idea to launch. We keep you involved every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative text-center reveal ${visible ? "visible" : ""} stagger-${i + 1}`}
            >
              {/* Step number circle */}
              <div className="relative mx-auto mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl mx-auto relative z-10 animate-icon-float`} style={{ animationDelay: `${i * 0.4}s` }}>
                  <step.icon className="w-9 h-9 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold z-20 shadow-lg">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
