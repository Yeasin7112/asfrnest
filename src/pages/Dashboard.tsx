import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { 
  LogOut, 
  Inbox, 
  ShoppingCart, 
  RefreshCw,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Home,
  Image
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/asfrnest-logo.png";
import type { User } from "@supabase/supabase-js";

interface ProblemSubmission {
  id: string;
  problem_type: string;
  description: string;
  contact: string;
  urgency: string;
  status: string;
  created_at: string;
  screenshot_url: string | null;
}

interface ServiceOrder {
  id: string;
  customer_name: string;
  mobile_number: string;
  service_name: string;
  service_price: string | null;
  status: string;
  notes: string | null;
  created_at: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"problems" | "orders">("orders");
  const [problems, setProblems] = useState<ProblemSubmission[]>([]);
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const translations = {
    dashboard: { en: "My Dashboard", bn: "আমার ড্যাশবোর্ড" },
    myOrders: { en: "My Orders", bn: "আমার অর্ডার" },
    myProblems: { en: "My Submissions", bn: "আমার সমস্যা" },
    noOrders: { en: "You haven't placed any orders yet.", bn: "আপনি এখনও কোনো অর্ডার দেননি।" },
    noProblems: { en: "You haven't submitted any problems yet.", bn: "আপনি এখনও কোনো সমস্যা জমা দেননি।" },
    status: { en: "Status", bn: "স্থিতি" },
    pending: { en: "Pending", bn: "অপেক্ষমাণ" },
    inProgress: { en: "In Progress", bn: "চলমান" },
    completed: { en: "Completed", bn: "সম্পন্ন" },
    cancelled: { en: "Cancelled", bn: "বাতিল" },
    logout: { en: "Logout", bn: "লগআউট" },
    backHome: { en: "Back to Home", bn: "হোমে ফিরুন" },
    refresh: { en: "Refresh", bn: "রিফ্রেশ" },
  };

  const t = (key: keyof typeof translations) => translations[key][language];

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (!session?.user) {
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchData();
      } else {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchData = async () => {
    setIsLoading(true);
    
    const [problemsRes, ordersRes] = await Promise.all([
      supabase
        .from("problem_submissions")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("service_orders")
        .select("*")
        .order("created_at", { ascending: false }),
    ]);

    if (problemsRes.data) setProblems(problemsRes.data);
    if (ordersRes.data) setOrders(ordersRes.data);
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="w-4 h-4" />;
      case "in_progress": return <AlertCircle className="w-4 h-4" />;
      case "completed": return <CheckCircle className="w-4 h-4" />;
      case "cancelled": return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-500/20 text-yellow-500";
      case "in_progress": return "bg-blue-500/20 text-blue-500";
      case "completed": return "bg-green-500/20 text-green-500";
      case "cancelled": return "bg-red-500/20 text-red-500";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending": return t("pending");
      case "in_progress": return t("inProgress");
      case "completed": return t("completed");
      case "cancelled": return t("cancelled");
      default: return status;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <RefreshCw className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Asfrnest" className="h-10" />
            <span className="text-sm text-muted-foreground">{t("dashboard")}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">{t("backHome")}</span>
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">{t("logout")}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* User info */}
        <div className="mb-8">
          <p className="text-muted-foreground text-sm">{user.email}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "orders"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "bg-secondary text-muted-foreground border border-border"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {t("myOrders")} ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab("problems")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "problems"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "bg-secondary text-muted-foreground border border-border"
            }`}
          >
            <Inbox className="w-4 h-4" />
            {t("myProblems")} ({problems.length})
          </button>
          <button
            onClick={fetchData}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">{t("refresh")}</span>
          </button>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="text-center py-12">
            <RefreshCw className="w-8 h-8 animate-spin text-primary mx-auto" />
          </div>
        ) : activeTab === "orders" ? (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>{t("noOrders")}</p>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="gradient-border rounded-xl p-6 bg-card">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{order.service_name}</h3>
                      <p className="text-sm text-muted-foreground">{order.service_price}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(order.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {getStatusText(order.status)}
                    </div>
                  </div>
                  {order.notes && (
                    <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-4">
                      {order.notes}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {problems.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Inbox className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>{t("noProblems")}</p>
              </div>
            ) : (
              problems.map((problem) => (
                <div key={problem.id} className="gradient-border rounded-xl p-6 bg-card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {problem.problem_type}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(problem.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(problem.status)}`}>
                      {getStatusIcon(problem.status)}
                      {getStatusText(problem.status)}
                    </div>
                  </div>
                  <p className="text-foreground">{problem.description}</p>
                  {problem.screenshot_url && (
                    <div className="mt-4">
                      <a 
                        href={problem.screenshot_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Image className="w-4 h-4" />
                        View Screenshot
                      </a>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;