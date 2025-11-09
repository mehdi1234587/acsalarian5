import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

const RequestForm = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name.trim() || !whatsapp.trim()) {
      toast({
        title: "خطا",
        description: "لطفاً تمام فیلدها را پر کنید",
        variant: "destructive",
      });
      return;
    }

    // Validate WhatsApp number format (basic)
    if (whatsapp.trim().length < 10) {
      toast({
        title: "خطا",
        description: "شماره واتساپ معتبر نیست",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('requests')
        .insert([
          { 
            name: name.trim(), 
            whatsapp: whatsapp.trim() 
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setName("");
      setWhatsapp("");
      
      toast({
        title: "موفقیت!",
        description: "درخواست شما با موفقیت ثبت شد",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "خطا",
        description: "مشکلی در ثبت درخواست رخ داد. لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-2xl border-2 animate-slide-up">
          <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-accent/10">
            <CardTitle className="text-2xl md:text-4xl font-bold text-foreground">
              درخواست دوره اصلی و کامل
              <span className="block text-secondary mt-2">با ۶۰٪ تخفیف ویژه</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            {isSuccess ? (
              <div className="bg-secondary/10 border-2 border-secondary rounded-lg p-8 text-center animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  ✅ اطلاعات شما ثبت شد
                </h3>
                <p className="text-lg text-foreground mb-4">
                  لطفاً منتظر تماس پشتیبانی باشید
                </p>
                <p className="text-muted-foreground">
                  همکاران ما در اسرع وقت با شما تماس خواهند گرفت
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-6"
                >
                  ثبت درخواست جدید
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold">
                    نام و نام خانوادگی *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="مثال: علی احمدی"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-lg py-6"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-lg font-semibold">
                    شماره واتساپ *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="مثال: 09123456789"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="text-lg py-6"
                    required
                    disabled={isSubmitting}
                    dir="ltr"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      در حال ارسال...
                    </>
                  ) : (
                    "ارسال درخواست"
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  با ارسال درخواست، شما{" "}
                  <span className="font-bold text-secondary">۶۰٪ تخفیف ویژه</span>{" "}
                  دریافت خواهید کرد
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RequestForm;
