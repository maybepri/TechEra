import { Product } from "@shared/schema";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const isSubscription = product.category === "subscription";

  // ✅ FIX: use `image` from MongoDB, not `imageUrl`
  const imageUrl =
    product.image && product.image.length > 0
      ? product.image
      : "https://images.unsplash.com/photo-1552820728-8b83bbb773f";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-card rounded-3xl border border-white/5 overflow-hidden hover:border-primary/50 transition-colors duration-300"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-transparent group-hover:to-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className="relative flex flex-col h-full bg-card/95 backdrop-blur-xl rounded-[22px] p-6 z-10">
        {/* IMAGE */}
        <div className="relative aspect-[4/3] mb-6 rounded-2xl overflow-hidden bg-secondary">
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10 opacity-60" />
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {isSubscription && (
            <div className="absolute top-3 right-3 z-20">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent backdrop-blur-md border border-accent/20">
                MONTHLY
              </span>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex-grow">
          <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>

          {product.description && (
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {product.description}
            </p>
          )}

          {isSubscription && product.features && (
            <ul className="space-y-3 mb-8">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="mt-0.5 p-0.5 rounded-full bg-primary/20 text-primary">
                    <Check className="w-3 h-3" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* FOOTER */}
        <div className="pt-6 border-t border-white/5 mt-auto">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Price</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-display font-bold text-white">
                  NPR {(product.price / 100).toFixed(2)}
                </span>
                {isSubscription && (
                  <span className="text-sm text-muted-foreground">/mo</span>
                )}
              </div>
            </div>

            <button className="relative overflow-hidden px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 active:scale-95 transition-all duration-200">
              <span className="relative z-10 flex items-center gap-2">
                {isSubscription ? "Subscribe" : "Buy Now"}
                <Zap className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
