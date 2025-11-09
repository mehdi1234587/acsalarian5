import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('request-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">
          مهدی سالاریان
        </h1>
        <Button 
          onClick={scrollToForm}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          درخواست دوره کامل
        </Button>
      </div>
    </header>
  );
};

export default Header;
