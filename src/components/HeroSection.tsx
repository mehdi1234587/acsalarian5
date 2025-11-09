import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToVideos = () => {
    const videosSection = document.getElementById('videos-section');
    if (videosSection) {
      videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-accent/30 to-background/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
          آموزش تخصصی و حرفه‌ای
          <br />
          <span className="text-primary-glow">با مهدی سالاریان</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          دوره‌های جامع و کاربردی برای یادگیری سریع و موثر
          <br />
          از صفر تا صد با بهترین متد آموزشی
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToVideos}
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-bold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300"
          >
            مشاهده ویدیوهای رایگان
          </Button>
          
          <Button
            onClick={() => {
              const formSection = document.getElementById('request-form');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300"
          >
            ثبت‌نام در دوره کامل
          </Button>
        </div>

        {/* Stats or Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-2">+۱۰۰۰</h3>
            <p className="text-white/80">دانشجوی موفق</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-2">+۵۰</h3>
            <p className="text-white/80">ساعت آموزش</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-2">۱۰۰٪</h3>
            <p className="text-white/80">رضایت دانشجویان</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
