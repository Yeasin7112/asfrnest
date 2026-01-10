import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          <span className="text-sm font-medium">Stuck? Chat with us!</span>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
