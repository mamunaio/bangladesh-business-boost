const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://codenextit.com/assets/img/cnits-logo-main.png"
              alt="Code Next IT"
              className="h-8 brightness-0 invert mb-3"
            />
            <p className="text-sm text-background/60 leading-relaxed">
              Your trusted local technology partner in Bangladesh. Helping businesses grow online since 2021.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#services" className="hover:text-background transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">SEO Services</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Software Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>
                <a href="tel:+8801833925304" className="hover:text-background transition-colors">
                  +880 1833-925304
                </a>
              </li>
              <li>
                <a href="mailto:info@codenextit.com" className="hover:text-background transition-colors">
                  info@codenextit.com
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Code Next IT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
