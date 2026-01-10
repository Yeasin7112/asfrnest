import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { 
  LogOut, 
  Inbox, 
  ShoppingCart, 
  RefreshCw,
  Check,
  Clock,
  X,
  Phone,
  Mail,
  Image
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState<"problems" | "orders">("problems");
  const [problems, setProblems] = useState<ProblemSubmission[]>([]);
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          setTimeout(() => checkAdminRole(session.user.id), 0);
        } else {
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminRole(session.user.id);
      } else {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminRole = async (userId: string) => {
    const { data } = await supabase.rpc('has_role', {
      _user_id: userId,
      _role: 'admin'
    });

    if (data) {
      setIsAdmin(true);
      fetchData();
    } else {
      toast({ title: "Access Denied", description: "You're not an admin.", variant: "destructive" });
      await supabase.auth.signOut();
      navigate("/auth");
    }
  };

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

  const updateProblemStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("problem_submissions")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({ title: "Error", description: "Failed to update status.", variant: "destructive" });
    } else {
      toast({ title: "Updated", description: "Status updated successfully." });
      fetchData();
    }
  };

  const updateOrderStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("service_orders")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({ title: "Error", description: "Failed to update status.", variant: "destructive" });
    } else {
      toast({ title: "Updated", description: "Status updated successfully." });
      fetchData();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
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

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "asap": return "bg-red-500/20 text-red-500";
      case "urgent": return "bg-orange-500/20 text-orange-500";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (!isAdmin) {
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
            <span className="text-sm text-muted-foreground">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="gradient-border rounded-xl p-4 bg-card">
            <p className="text-muted-foreground text-sm">Total Problems</p>
            <p className="text-2xl font-bold text-primary">{problems.length}</p>
          </div>
          <div className="gradient-border rounded-xl p-4 bg-card">
            <p className="text-muted-foreground text-sm">Pending Problems</p>
            <p className="text-2xl font-bold text-yellow-500">
              {problems.filter(p => p.status === "pending").length}
            </p>
          </div>
          <div className="gradient-border rounded-xl p-4 bg-card">
            <p className="text-muted-foreground text-sm">Total Orders</p>
            <p className="text-2xl font-bold text-accent">{orders.length}</p>
          </div>
          <div className="gradient-border rounded-xl p-4 bg-card">
            <p className="text-muted-foreground text-sm">Pending Orders</p>
            <p className="text-2xl font-bold text-yellow-500">
              {orders.filter(o => o.status === "pending").length}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("problems")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "problems"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "bg-secondary text-muted-foreground border border-border"
            }`}
          >
            <Inbox className="w-4 h-4" />
            Problem Submissions ({problems.length})
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "orders"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "bg-secondary text-muted-foreground border border-border"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            Service Orders ({orders.length})
          </button>
          <button
            onClick={fetchData}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="text-center py-12">
            <RefreshCw className="w-8 h-8 animate-spin text-primary mx-auto" />
          </div>
        ) : activeTab === "problems" ? (
          <div className="space-y-4">
            {problems.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No problem submissions yet.
              </div>
            ) : (
              problems.map((problem) => (
                <div key={problem.id} className="gradient-border rounded-xl p-6 bg-card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          {problem.problem_type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(problem.urgency)}`}>
                          {problem.urgency}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(problem.status)}`}>
                          {problem.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {new Date(problem.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={problem.contact.includes("@") ? `mailto:${problem.contact}` : `tel:${problem.contact}`}
                        className="flex items-center gap-1 px-3 py-1.5 bg-secondary border border-border rounded-lg text-sm hover:bg-secondary/80 transition-colors"
                      >
                        {problem.contact.includes("@") ? <Mail className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                        {problem.contact}
                      </a>
                    </div>
                  </div>
                  <p className="text-foreground mb-4">{problem.description}</p>
                  {problem.screenshot_url && (
                    <div className="mb-4">
                      <a 
                        href={problem.screenshot_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Image className="w-4 h-4" />
                        View Screenshot
                      </a>
                      <img 
                        src={problem.screenshot_url} 
                        alt="Problem screenshot" 
                        className="mt-2 max-w-sm rounded-lg border border-border"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateProblemStatus(problem.id, "in_progress")}
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-500/20 text-blue-500 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                    >
                      <Clock className="w-4 h-4" /> In Progress
                    </button>
                    <button
                      onClick={() => updateProblemStatus(problem.id, "completed")}
                      className="flex items-center gap-1 px-3 py-1.5 bg-green-500/20 text-green-500 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                    >
                      <Check className="w-4 h-4" /> Completed
                    </button>
                    <button
                      onClick={() => updateProblemStatus(problem.id, "cancelled")}
                      className="flex items-center gap-1 px-3 py-1.5 bg-red-500/20 text-red-500 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                    >
                      <X className="w-4 h-4" /> Cancel
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No service orders yet.
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="gradient-border rounded-xl p-6 bg-card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{order.customer_name}</h3>
                      <p className="text-primary font-medium">{order.service_name}</p>
                      <p className="text-sm text-muted-foreground">{order.service_price}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(order.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <a
                        href={`tel:${order.mobile_number}`}
                        className="flex items-center gap-1 px-3 py-1.5 bg-green-500/20 text-green-500 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {order.mobile_number}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateOrderStatus(order.id, "in_progress")}
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-500/20 text-blue-500 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                    >
                      <Clock className="w-4 h-4" /> In Progress
                    </button>
                    <button
                      onClick={() => updateOrderStatus(order.id, "completed")}
                      className="flex items-center gap-1 px-3 py-1.5 bg-green-500/20 text-green-500 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                    >
                      <Check className="w-4 h-4" /> Completed
                    </button>
                    <button
                      onClick={() => updateOrderStatus(order.id, "cancelled")}
                      className="flex items-center gap-1 px-3 py-1.5 bg-red-500/20 text-red-500 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                    >
                      <X className="w-4 h-4" /> Cancel
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
