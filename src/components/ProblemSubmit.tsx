import { useState } from "react";
import { Upload, Send, Sparkles, CheckCircle } from "lucide-react";

const problemTypes = [
  "App/Software Issue",
  "Website Problem",
  "Phone/Mobile Issue",
  "Need Something Built",
  "Tech Guidance",
  "Other",
];

const ProblemSubmit = () => {
  const [formData, setFormData] = useState({
    problemType: "",
    description: "",
    contact: "",
    urgency: "normal",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="submit-problem" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">AI-Assisted Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Describe Your <span className="gradient-text">Tech Problem</span>
            </h2>
            <p className="text-muted-foreground">
              Tell us what's wrong or what you need. We'll get back with a solution fast.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="gradient-border rounded-2xl p-6 md:p-8 bg-card">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Problem Submitted!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                {/* Problem Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">What type of problem?</label>
                  <div className="flex flex-wrap gap-2">
                    {problemTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, problemType: type })}
                        className={`px-4 py-2 rounded-lg text-sm transition-all ${
                          formData.problemType === type
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Describe your problem</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us everything... What's happening? What did you try? What do you need?"
                    className="w-full h-32 px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>

                {/* Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Attach screenshots (optional)</label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click or drag files here</p>
                  </div>
                </div>

                {/* Urgency */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">How urgent?</label>
                  <div className="flex gap-3">
                    {["normal", "urgent", "asap"].map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: u })}
                        className={`flex-1 px-4 py-3 rounded-lg text-sm capitalize transition-all ${
                          formData.urgency === u
                            ? u === "asap" 
                              ? "bg-accent text-accent-foreground"
                              : "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground border border-border"
                        }`}
                      >
                        {u === "asap" ? "ASAP! 🔥" : u}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-3">WhatsApp or Email</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Your WhatsApp number or email"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Problem
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProblemSubmit;
