import { useState, useRef } from "react";
import { Upload, Send, Sparkles, CheckCircle, X, Image } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const ProblemSubmit = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    problemType: "",
    description: "",
    contact: "",
    urgency: "normal",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(false);

  const problemTypes = [
    { key: "appSoftwareIssue", value: "App/Software Issue" },
    { key: "websiteProblem", value: "Website Problem" },
    { key: "phoneMobileIssue", value: "Phone/Mobile Issue" },
    { key: "needSomethingBuilt", value: "Need Something Built" },
    { key: "techGuidance", value: "Tech Guidance" },
    { key: "other", value: "Other" },
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (PNG, JPG, etc.)",
          variant: "destructive",
        });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let screenshotUrl: string | null = null;

      // Upload screenshot if selected
      if (selectedFile) {
        setUploadProgress(true);
        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('problem-screenshots')
          .upload(fileName, selectedFile);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          throw new Error("Failed to upload screenshot");
        }

        const { data: urlData } = supabase.storage
          .from('problem-screenshots')
          .getPublicUrl(fileName);

        screenshotUrl = urlData.publicUrl;
        setUploadProgress(false);
      }

      const { error } = await supabase
        .from("problem_submissions")
        .insert({
          problem_type: formData.problemType,
          description: formData.description,
          contact: formData.contact,
          urgency: formData.urgency,
          screenshot_url: screenshotUrl,
        });

      if (error) throw error;

      setSubmitted(true);
      setFormData({ problemType: "", description: "", contact: "", urgency: "normal" });
      removeFile();
      
      toast({
        title: t("problemSubmitted"),
        description: t("willGetBack"),
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting problem:", error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setUploadProgress(false);
    }
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
              <span className="text-sm text-muted-foreground">{t("aiAssisted")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">{t("describeProblem")}</span>
            </h2>
            <p className="text-muted-foreground">
              {t("problemSubtitle")}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="gradient-border rounded-2xl p-6 md:p-8 bg-card">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("problemSubmitted")}</h3>
                <p className="text-muted-foreground">{t("willGetBack")}</p>
              </div>
            ) : (
              <>
                {/* Problem Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">{t("problemType")}</label>
                  <div className="flex flex-wrap gap-2">
                    {problemTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, problemType: type.value })}
                        className={`px-4 py-2 rounded-lg text-sm transition-all ${
                          formData.problemType === type.value
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                        }`}
                      >
                        {t(type.key)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">{t("describeYourProblem")}</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={t("problemPlaceholder")}
                    className="w-full h-32 px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>

                {/* Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">{t("attachScreenshots")}</label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  
                  {previewUrl ? (
                    <div className="relative border border-border rounded-xl overflow-hidden">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="w-full h-48 object-cover"
                      />
                      <button
                        type="button"
                        onClick={removeFile}
                        className="absolute top-2 right-2 p-1.5 bg-destructive text-destructive-foreground rounded-full hover:opacity-90 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-2 left-2 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-lg text-xs flex items-center gap-1">
                        <Image className="w-3 h-3" />
                        {selectedFile?.name}
                      </div>
                    </div>
                  ) : (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">{t("clickOrDrag")}</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                    </div>
                  )}
                </div>

                {/* Urgency */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">{t("howUrgent")}</label>
                  <div className="flex gap-3">
                    {[
                      { key: "normal", label: t("normal") },
                      { key: "urgent", label: t("urgent") },
                      { key: "asap", label: t("asap") },
                    ].map((u) => (
                      <button
                        key={u.key}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: u.key })}
                        className={`flex-1 px-4 py-3 rounded-lg text-sm transition-all ${
                          formData.urgency === u.key
                            ? u.key === "asap" 
                              ? "bg-accent text-accent-foreground"
                              : "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground border border-border"
                        }`}
                      >
                        {u.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-3">{t("whatsappOrEmail")}</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder={t("contactPlaceholder")}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  {isLoading ? (uploadProgress ? "Uploading..." : t("submitting")) : t("submitProblem")}
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