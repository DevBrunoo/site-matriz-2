import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { isAuthenticated } from "@/lib/adminAuth";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Home is the initial page — keep eager so it renders immediately
import Home from "@/pages/Home";

// Admin pages kept eager — critical auth flow, no benefit to lazy-loading
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";

// All other pages lazy-loaded → smaller initial JS bundle

const Historia        = lazy(() => import("@/pages/Historia"));
const Capelas         = lazy(() => import("@/pages/Capelas"));
const Padres          = lazy(() => import("@/pages/Padres"));
const Secretaria      = lazy(() => import("@/pages/Secretaria"));

const Agenda          = lazy(() => import("@/pages/Agenda"));
const Missas          = lazy(() => import("@/pages/Missas"));
const Eventos         = lazy(() => import("@/pages/Eventos"));
const ViaSacra        = lazy(() => import("@/pages/ViaSacra"));

const Sacramentos     = lazy(() => import("@/pages/Sacramentos"));
const Batismo         = lazy(() => import("@/pages/Batismo"));
const Confissao       = lazy(() => import("@/pages/Confissao"));
const UncaoEnfermos   = lazy(() => import("@/pages/UncaoEnfermos"));
const Brasao          = lazy(() => import("@/pages/Brasao"));
const Eucaristia      = lazy(() => import("@/pages/Eucaristia"));
const Crisma          = lazy(() => import("@/pages/Crisma"));
const Matrimonio      = lazy(() => import("@/pages/Matrimonio"));
const PastoralBatismo = lazy(() => import("@/pages/PastoralBatismo"));

const Pastorais             = lazy(() => import("@/pages/Pastorais"));
const Rcc                   = lazy(() => import("@/pages/Rcc"));
const Tlc                   = lazy(() => import("@/pages/Tlc"));
const TercoHomens           = lazy(() => import("@/pages/TercoHomens"));
const Catequese             = lazy(() => import("@/pages/Catequese"));
const Pascom                = lazy(() => import("@/pages/Pascom"));
const Liturgia              = lazy(() => import("@/pages/Liturgia"));
const Coral                 = lazy(() => import("@/pages/Coral"));
const AssociacaoRosario     = lazy(() => import("@/pages/AssociacaoRosario"));
const PastoralFamiliar      = lazy(() => import("@/pages/PastoralFamiliar"));
const GrupoEvangelizacao    = lazy(() => import("@/pages/GrupoEvangelizacao"));
const SagradoCoracaoDeJesus = lazy(() => import("@/pages/SagradoCoracaoDeJesus"));
const PastoralSobriedade    = lazy(() => import("@/pages/PastoralSobriedade"));
const PastoralDizimo        = lazy(() => import("@/pages/PastoralDizimo"));
const RenovacaoCarismatica  = lazy(() => import("@/pages/RenovacaoCarismatica"));

const Galeria         = lazy(() => import("@/pages/Galeria"));
const ReformaParoquia = lazy(() => import("@/pages/ReformaParoquia"));
const Contato         = lazy(() => import("@/pages/Contato"));
const Dizimo          = lazy(() => import("@/pages/Dizimo"));
const Cartazes        = lazy(() => import("@/pages/Cartazes"));
const NotFound        = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

// Page fallback: dark navy matches the site background — no white flash
const PageFallback = () => (
  <div className="flex-grow" style={{ minHeight: "calc(100vh - 56px)", background: "hsl(224,64%,15%)" }} />
);

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col w-full relative">
      <Navbar />
      {/* Suspense here so Navbar + Footer always stay visible during lazy-page load */}
      <Suspense fallback={<PageFallback />}>
        <div className="flex-grow">{children}</div>
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/"><Layout><Home /></Layout></Route>

      {/* Paróquia */}
      <Route path="/historia"><Layout><Historia /></Layout></Route>
      <Route path="/capelas"><Layout><Capelas /></Layout></Route>
      <Route path="/padres"><Layout><Padres /></Layout></Route>
      <Route path="/secretaria"><Layout><Secretaria /></Layout></Route>

      {/* Agenda */}
      <Route path="/agenda"><Layout><Agenda /></Layout></Route>
      <Route path="/missas"><Layout><Missas /></Layout></Route>
      <Route path="/eventos"><Layout><Eventos /></Layout></Route>
      <Route path="/via-sacra"><Layout><ViaSacra /></Layout></Route>

      {/* Sacramentos */}
      <Route path="/sacramentos"><Layout><Sacramentos /></Layout></Route>
      <Route path="/batismo"><Layout><Batismo /></Layout></Route>
      <Route path="/confissao"><Layout><Confissao /></Layout></Route>
      <Route path="/uncao-dos-enfermos"><Layout><UncaoEnfermos /></Layout></Route>
      <Route path="/brasao"><Layout><Brasao /></Layout></Route>
      <Route path="/eucaristia"><Layout><Eucaristia /></Layout></Route>
      <Route path="/crisma"><Layout><Crisma /></Layout></Route>
      <Route path="/matrimonio"><Layout><Matrimonio /></Layout></Route>
      <Route path="/pastoral-do-batismo"><Layout><PastoralBatismo /></Layout></Route>

      {/* Pastorais */}
      <Route path="/pastorais"><Layout><Pastorais /></Layout></Route>
      <Route path="/rcc"><Layout><Rcc /></Layout></Route>
      <Route path="/tlc"><Layout><Tlc /></Layout></Route>
      <Route path="/terco-dos-homens"><Layout><TercoHomens /></Layout></Route>
      <Route path="/catequese"><Layout><Catequese /></Layout></Route>
      <Route path="/pascom"><Layout><Pascom /></Layout></Route>
      <Route path="/liturgia"><Layout><Liturgia /></Layout></Route>
      <Route path="/coral"><Layout><Coral /></Layout></Route>
      <Route path="/associacao-do-rosario"><Layout><AssociacaoRosario /></Layout></Route>
      <Route path="/pastoral-familiar"><Layout><PastoralFamiliar /></Layout></Route>
      <Route path="/grupo-de-evangelizacao"><Layout><GrupoEvangelizacao /></Layout></Route>
      <Route path="/sagrado-coracao-de-jesus"><Layout><SagradoCoracaoDeJesus /></Layout></Route>
      <Route path="/pastoral-da-sobriedade"><Layout><PastoralSobriedade /></Layout></Route>
      <Route path="/pastoral-do-dizimo"><Layout><PastoralDizimo /></Layout></Route>
      <Route path="/renovacao-carismatica"><Layout><RenovacaoCarismatica /></Layout></Route>

      {/* Galeria */}
      <Route path="/galeria"><Layout><Galeria /></Layout></Route>

      {/* Outros */}
      <Route path="/reforma-da-paroquia"><Layout><ReformaParoquia /></Layout></Route>
      <Route path="/contato"><Layout><Contato /></Layout></Route>
      <Route path="/dizimo"><Layout><Dizimo /></Layout></Route>
      <Route path="/cartazes"><Layout><Cartazes /></Layout></Route>

      {/* Admin — no Layout wrapper */}
      <Route path="/admin"><AdminLogin /></Route>
      <Route path="/admin/dashboard">
        {isAuthenticated() ? <AdminDashboard /> : <Redirect to="/admin" />}
      </Route>

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
