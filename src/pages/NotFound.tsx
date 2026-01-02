import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[80vh]">
          <div className="text-center px-4">
            <h1 className="font-heading text-8xl md:text-9xl text-gold mb-4">404</h1>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">The page you're looking for doesn't exist.</p>
            <Button asChild variant="hero" size="lg">
              <Link to="/"><Home className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFound;
