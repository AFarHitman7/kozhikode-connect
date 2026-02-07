import { Link } from "react-router-dom";
import calicutLogo from "@/assets/calicut-commons-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={calicutLogo} alt="" className="w-8 h-8 object-contain opacity-70" />
              <h3 className="font-display text-lg font-semibold">
                Calicut Commons
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A living map of Kozhikode's social fabric — from SM Street to the beach road. 
              Communities discovered by rhythm, not algorithm.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-muted-foreground">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Communities
              </Link>
              <Link to="/events" className="text-sm hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/food" className="text-sm hover:text-primary transition-colors">
                Food
              </Link>
              <Link to="/archives" className="text-sm hover:text-primary transition-colors">
                Archives
              </Link>
              <Link to="/manifesto" className="text-sm hover:text-primary transition-colors">
                Manifesto
              </Link>
            </div>
          </div>

          {/* Ethos */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-muted-foreground">
              Our Ethos
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>No popularity rankings</li>
              <li>No algorithmic feeds</li>
              <li>No DMs or forums</li>
              <li>Civic infrastructure, not social media</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Calicut Commons · Kozhikode, Kerala
          </p>
          <p className="text-xs text-muted-foreground italic font-display">
            "ഈ നഗരത്തിന്റെ ശക്തി വലിപ്പമല്ല. തുടർച്ചയാണ്."
          </p>
        </div>
      </div>
    </footer>
  );
}
