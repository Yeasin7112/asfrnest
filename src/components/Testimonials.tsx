import { Quote } from "lucide-react";

const testimonials = [
  {
    problem: "Phone kept crashing randomly",
    solution: "Fixed in 30 minutes with remote guidance",
    name: "Rahul K.",
    role: "College Student",
  },
  {
    problem: "Needed a birthday website gift",
    solution: "Got a beautiful animated page in just 1 day",
    name: "Priya S.",
    role: "Working Professional",
  },
  {
    problem: "Startup app idea but no tech knowledge",
    solution: "Built our MVP in 2 weeks at fraction of agency cost",
    name: "Amit T.",
    role: "Startup Founder",
  },
  {
    problem: "E-commerce site was slow & broken",
    solution: "Optimized & fixed all issues within 48 hours",
    name: "Sneha M.",
    role: "Small Business Owner",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Real Problems. <span className="gradient-text">Real Solutions.</span>
          </h2>
          <p className="text-muted-foreground">
            See how we've helped people just like you.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-6 bg-card card-hover"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-destructive text-sm font-medium shrink-0">Problem:</span>
                  <p className="text-muted-foreground text-sm">{item.problem}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-sm font-medium shrink-0">Solution:</span>
                  <p className="text-foreground text-sm font-medium">{item.solution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{item.name}</div>
                  <div className="text-muted-foreground text-xs">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
