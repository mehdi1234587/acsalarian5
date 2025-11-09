import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "آموزش اول - مقدمه و آشنایی",
    src: "/video/video1.mp4",
    description: "آشنایی با مفاهیم اولیه و پایه‌ای"
  },
  {
    id: 2,
    title: "آموزش دوم - مباحث پیشرفته",
    src: "/video/video2.mp4",
    description: "فراگیری تکنیک‌های حرفه‌ای"
  },
  {
    id: 3,
    title: "آموزش سوم - پروژه عملی",
    src: "/video/video3.mp4",
    description: "پیاده‌سازی پروژه واقعی"
  }
];

const VideosSection = () => {
  return (
    <section id="videos-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            ویدیوهای آموزشی رایگان
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ویدیوهای رایگان را مشاهده کنید و با کیفیت آموزش‌ها آشنا شوید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster=""
                  >
                    <source src={video.src} type="video/mp4" />
                    مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                  </video>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-primary/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-primary-foreground" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
