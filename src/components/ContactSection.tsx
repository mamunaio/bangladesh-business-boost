import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/use-reveal";

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/+8801833925304?text=${text}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "We'll respond as soon as possible." });
  };

  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "+880 1833-925304", href: "tel:+8801833925304", gradient: "from-violet-500 to-purple-600" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/+8801833925304", gradient: "from-emerald-400 to-green-500" },
    { icon: Mail, label: "Email", value: "info@codenextit.com", href: "mailto:info@codenextit.com", gradient: "from-cyan-400 to-teal-500" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: undefined, gradient: "from-amber-400 to-orange-500" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Let's Build Your Website{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Get in touch today for a free consultation. We respond within 1 hour.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className={`space-y-5 reveal-left ${visible ? "visible" : ""}`}>
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl border p-5 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow animate-icon-pulse`}>
                  <item.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground flex items-center gap-1">
                    {item.label}
                    {item.href && <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={`bg-card rounded-2xl border p-8 space-y-5 shadow-lg reveal-right ${visible ? "visible" : ""}`}>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Your Name</label>
              <Input placeholder="e.g. Rahim Uddin" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Phone Number</label>
              <Input placeholder="e.g. 01833-925304" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Your Message</label>
              <Textarea placeholder="Tell us about your project..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="rounded-xl" />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2">
              <Send className="w-5 h-5" />
              Send via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
