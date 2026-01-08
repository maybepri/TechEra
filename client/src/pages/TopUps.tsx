import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { Loader2, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TopUps() {
  const { data: products, isLoading } = useProducts();
  const topUpProducts = products?.filter(p => p.category === 'topup') || [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent mb-6">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Gaming Top-ups
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Recharge your favorite games instantly. Competitive rates, secure transactions, 
                and immediate delivery for uninterrupted gaming.
              </p>
            </motion.div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {topUpProducts.length > 0 ? (
                topUpProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-muted-foreground">No top-ups found.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
