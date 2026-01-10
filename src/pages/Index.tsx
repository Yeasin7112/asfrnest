import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProblemSubmit from "@/components/ProblemSubmit";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <ProblemSubmit />
      <WhyUs />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
