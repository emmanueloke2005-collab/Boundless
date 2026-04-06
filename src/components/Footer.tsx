import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <Link to="/" className="text-xl font-extrabold tracking-tighter">
            <span className="text-accent italic">BOUNDLESS</span>
          </Link>
          <p className="text-white/40 text-sm mt-2">© 2024 Boundless. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-white/60">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-accent transition-colors text-sm">Twitter</a>
          <a href="#" className="text-white/40 hover:text-accent transition-colors text-sm">Instagram</a>
          <a href="#" className="text-white/40 hover:text-accent transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
