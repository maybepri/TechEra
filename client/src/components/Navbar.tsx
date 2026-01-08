import { Link, useLocation } from "wouter";
import { Gamepad2, CreditCard, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: Sparkles },
    { href: "/subscriptions", label: "Subscriptions", icon: CreditCard },
    { href: "/topups", label: "Gaming Top-ups", icon: Gamepad2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              TechStore
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                    ${isActive 
                      ? "text-white bg-white/10 shadow-inner" 
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <link.icon className={`w-4 h-4 ${isActive ? "text-accent" : ""}`} />
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full mx-4"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/5 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center gap-3
                      ${isActive 
                        ? "bg-primary/20 text-primary-foreground border border-primary/20" 
                        : "text-muted-foreground hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <link.icon className={`w-5 h-5 ${isActive ? "text-accent" : ""}`} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
