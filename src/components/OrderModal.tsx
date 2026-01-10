import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  servicePrice: string;
}

const OrderModal = ({ isOpen, onClose, serviceName, servicePrice }: OrderModalProps) => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const translations = {
    orderService: { en: "Order Service", bn: "সেবা অর্ডার করুন" },
    yourName: { en: "Your Name", bn: "আপনার নাম" },
    namePlaceholder: { en: "Enter your full name", bn: "আপনার পুরো নাম লিখুন" },
    mobileNumber: { en: "Mobile Number (BD)", bn: "মোবাইল নম্বর (বাংলাদেশ)" },
    mobilePlaceholder: { en: "01XXXXXXXXX", bn: "০১XXXXXXXXX" },
    submitOrder: { en: "Submit Order", bn: "অর্ডার জমা দিন" },
    submitting: { en: "Submitting...", bn: "জমা হচ্ছে..." },
    orderSuccess: { en: "Order Submitted!", bn: "অর্ডার সফল হয়েছে!" },
    willCall: { en: "We'll call you shortly to confirm details and pricing.", bn: "আমরা শীঘ্রই কল করে বিস্তারিত ও মূল্য নিশ্চিত করব।" },
    note: { en: "Note: We will call you to discuss requirements and finalize the price.", bn: "নোট: আমরা আপনাকে কল করে প্রয়োজনীয়তা আলোচনা করে মূল্য নির্ধারণ করব।" },
  };

  const t = (key: keyof typeof translations) => translations[key][language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("service_orders")
        .insert({
          customer_name: formData.customerName,
          mobile_number: formData.mobileNumber,
          service_name: serviceName,
          service_price: servicePrice,
        });

      if (error) throw error;

      setSubmitted(true);
      setFormData({ customerName: "", mobileNumber: "" });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md gradient-border rounded-2xl p-6 bg-card animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t("orderSuccess")}</h3>
            <p className="text-muted-foreground">{t("willCall")}</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-display font-bold mb-2">{t("orderService")}</h2>
            <div className="mb-6 p-3 rounded-lg bg-secondary/50 border border-border">
              <p className="font-medium text-primary">{serviceName}</p>
              <p className="text-sm text-muted-foreground">{servicePrice}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t("yourName")}</label>
                <input
                  type="text"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  placeholder={t("namePlaceholder")}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t("mobileNumber")}</label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  placeholder={t("mobilePlaceholder")}
                  pattern="01[0-9]{9}"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <p className="text-xs text-muted-foreground">
                {t("note")}
              </p>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {isLoading ? t("submitting") : t("submitOrder")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
