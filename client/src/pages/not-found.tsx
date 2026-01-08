import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-destructive/10 text-destructive mb-4">
          <AlertCircle className="w-10 h-10" />
        </div>
        
        <h1 className="font-display font-bold text-6xl text-white">404</h1>
        <h2 className="font-display font-semibold text-2xl text-white">Page Not Found</h2>
        <p className="text-muted-foreground max-w-sm mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
          Return Home
        </Link>
      </div>
    </div>
  );
}
