import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layout Components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Pages
import Home from "@/pages/Home";
import Historia from "@/pages/Historia";
import Agenda from "@/pages/Agenda";
import Sacramentos from "@/pages/Sacramentos";
import Pastorais from "@/pages/Pastorais";
import Contato from "@/pages/Contato";
import Dizimo from "@/pages/Dizimo";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Wrapper to include Navbar and Footer on all pages
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Layout><Home /></Layout>
      </Route>
      <Route path="/historia">
        <Layout><Historia /></Layout>
      </Route>
      <Route path="/agenda">
        <Layout><Agenda /></Layout>
      </Route>
      <Route path="/sacramentos">
        <Layout><Sacramentos /></Layout>
      </Route>
      <Route path="/pastorais">
        <Layout><Pastorais /></Layout>
      </Route>
      <Route path="/contato">
        <Layout><Contato /></Layout>
      </Route>
      <Route path="/dizimo">
        <Layout><Dizimo /></Layout>
      </Route>

      {/* 404 does not use the standard layout */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
