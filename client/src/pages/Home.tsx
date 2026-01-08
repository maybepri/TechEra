import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { ArrowRight, Loader2, ShieldCheck, Zap, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { data: products, isLoading } = useProducts();

  // Get featured products (e.g. first 3)
  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Grid */}
        <section className="py-20 bg-secondary/30 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Instant Delivery", desc: "Get your codes and top-ups delivered to your email instantly after payment." },
                { icon: ShieldCheck, title: "Secure Payments", desc: "Bank-grade encryption ensures your payment data is always protected." },
                { icon: Clock, title: "24/7 Support", desc: "Our dedicated support team is always available to help you with any issues." }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Trending Now</h2>
                <p className="text-muted-foreground">Most popular items picked by our community</p>
              </div>
              <Link href="/topups" className="hidden sm:flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
            
            <div className="mt-12 text-center sm:hidden">
              <Link href="/topups" className="inline-flex items-center gap-2 text-accent font-medium">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
