import { Link } from "wouter";
import { Github, Twitter, Instagram, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 fill-current" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                TechStore
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Your premier destination for digital gaming goods and software subscriptions. 
              Instant delivery, secure payments, 24/7 support.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/subscriptions" className="text-muted-foreground hover:text-accent transition-colors">Subscriptions</Link></li>
              <li><Link href="/topups" className="text-muted-foreground hover:text-accent transition-colors">Gaming Top-ups</Link></li>
              <li><Link href="/topups" className="text-muted-foreground hover:text-accent transition-colors">Gift Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechStore. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
