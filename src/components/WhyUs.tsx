import { IndianRupee, MessageCircle, Heart, Zap } from "lucide-react";

const reasons = [
  {
    icon: IndianRupee,
    title: "We don't overcharge",
    description: "Fair pricing that students, freelancers & small businesses can actually afford.",
  },
  {
    icon: MessageCircle,
    title: "We speak human",
    description: "No tech jargon. We explain everything in simple language you understand.",
  },
  {
    icon: Heart,
    title: "We actually care",
    description: "Your problem is our priority. We don't rest until you're satisfied.",
  },
  {
    icon: Zap,
    title: "We deliver fast",
    description: "No endless waiting. Most issues solved within 24-48 hours.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why <span className="gradient-text">Asfrnest</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not your typical tech agency. We're your friendly neighborhood tech helpers who actually solve problems without burning your wallet.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Pricing Philosophy */}
          <div className="gradient-border rounded-2xl p-8 bg-card">
            <h3 className="text-2xl font-display font-bold mb-6">
              Our <span className="text-accent">Pricing</span> Philosophy
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Transparent quotes.</span> No hidden fees, no surprise charges.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Pay what's fair.</span> We price based on complexity, not your budget.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Student & startup friendly.</span> Special rates for those building their dreams.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent text-xs">★</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Free consultation.</span> Describe your problem first, we'll tell you the cost.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border">
              <p className="text-sm text-center text-muted-foreground">
                "We believe good tech help shouldn't cost a fortune. <span className="text-foreground font-medium">Period.</span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
