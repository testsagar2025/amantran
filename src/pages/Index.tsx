import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import StatementSection from "@/components/home/StatementSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import ProcessSection from "@/components/home/ProcessSection";
import InfoSection from "@/components/home/InfoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatementSection />
        <CollectionsSection />
        <ProcessSection />
        <InfoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
