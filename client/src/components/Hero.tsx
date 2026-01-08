import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Premium Digital Services</span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6">
            Level Up Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
              Digital Experience
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Instant delivery on premium gaming top-ups and software subscriptions. 
            Secure, fast, and reliable digital goods for the modern user.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/topups" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
              Browse Top-ups <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/subscriptions" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary hover:bg-secondary/80 text-white font-semibold text-lg transition-all border border-white/5 hover:border-white/10 flex items-center justify-center">
              View Subscriptions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
