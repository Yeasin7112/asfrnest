import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/asfrnest-logo.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const translations = {
    login: { en: "Login", bn: "লগইন" },
    signup: { en: "Create Account", bn: "অ্যাকাউন্ট তৈরি করুন" },
    loginSubtitle: { en: "Sign in to track your orders and submissions", bn: "আপনার অর্ডার এবং সমস্যা ট্র্যাক করতে সাইন ইন করুন" },
    signupSubtitle: { en: "Create an account to track your orders", bn: "আপনার অর্ডার ট্র্যাক করতে অ্যাকাউন্ট তৈরি করুন" },
    email: { en: "Email", bn: "ইমেইল" },
    password: { en: "Password", bn: "পাসওয়ার্ড" },
    signIn: { en: "Sign In", bn: "সাইন ইন" },
    signUp: { en: "Sign Up", bn: "সাইন আপ" },
    pleaseWait: { en: "Please wait...", bn: "অপেক্ষা করুন..." },
    noAccount: { en: "Don't have an account? Sign up", bn: "অ্যাকাউন্ট নেই? সাইন আপ করুন" },
    haveAccount: { en: "Already have an account? Sign in", bn: "অ্যাকাউন্ট আছে? সাইন ইন করুন" },
    backHome: { en: "← Back to home", bn: "← হোমে ফিরুন" },
  };

  const t = (key: keyof typeof translations) => translations[key][language];

  useEffect(() => {
    // Check if already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        checkAndRedirect(session.user.id);
      }
    });
  }, []);

  const checkAndRedirect = async (userId: string) => {
    const { data: isAdmin } = await supabase.rpc('has_role', {
      _user_id: userId,
      _role: 'admin'
    });

    if (isAdmin) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          toast({ title: "Welcome back!", description: "Logged in successfully." });
          await checkAndRedirect(data.user.id);
        }
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
          },
        });

        if (error) {
          if (error.message.includes("already registered")) {
            toast({
              title: "Account exists",
              description: "This email is already registered. Please login.",
              variant: "destructive",
            });
            setIsLogin(true);
            return;
          }
          throw error;
        }

        if (data.user) {
          toast({
            title: "Account created!",
            description: "You're now logged in.",
          });
          navigate("/dashboard");
        }
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      toast({
        title: "Error",
        description: error.message || "Authentication failed.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Asfrnest Solutions" className="h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-display font-bold">
            {isLogin ? t("login") : t("signup")}
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            {isLogin ? t("loginSubtitle") : t("signupSubtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="gradient-border rounded-2xl p-6 bg-card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">{t("email")}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t("password")}</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary pr-12"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLogin ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
            {isLoading ? t("pleaseWait") : isLogin ? t("signIn") : t("signUp")}
          </button>

          <div className="text-center pt-4 border-t border-border">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isLogin ? t("noAccount") : t("haveAccount")}
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t("backHome")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;