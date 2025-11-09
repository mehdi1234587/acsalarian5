import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import RequestForm from "@/components/RequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideosSection />
      <RequestForm />
      <Footer />
    </div>
  );
};

export default Index;
