import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

import Home from "@/pages/Home";
import Historia from "@/pages/Historia";
import Capelas from "@/pages/Capelas";
import Padres from "@/pages/Padres";
import Secretaria from "@/pages/Secretaria";
import Agenda from "@/pages/Agenda";
import Missas from "@/pages/Missas";
import Eventos from "@/pages/Eventos";
import ViaSacra from "@/pages/ViaSacra";
import Sacramentos from "@/pages/Sacramentos";
import Batismo from "@/pages/Batismo";
import Confissao from "@/pages/Confissao";
import Eucaristia from "@/pages/Eucaristia";
import Crisma from "@/pages/Crisma";
import Matrimonio from "@/pages/Matrimonio";
import Pastorais from "@/pages/Pastorais";
import Rcc from "@/pages/Rcc";
import Tlc from "@/pages/Tlc";
import TercoHomens from "@/pages/TercoHomens";
import Catequese from "@/pages/Catequese";
import Pascom from "@/pages/Pascom";
import Liturgia from "@/pages/Liturgia";
import Coral from "@/pages/Coral";
import Contato from "@/pages/Contato";
import Dizimo from "@/pages/Dizimo";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <Navbar />
      <div className="flex-grow">{children}</div>
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
      <Route path="/eucaristia"><Layout><Eucaristia /></Layout></Route>
      <Route path="/crisma"><Layout><Crisma /></Layout></Route>
      <Route path="/matrimonio"><Layout><Matrimonio /></Layout></Route>

      {/* Pastorais */}
      <Route path="/pastorais"><Layout><Pastorais /></Layout></Route>
      <Route path="/rcc"><Layout><Rcc /></Layout></Route>
      <Route path="/tlc"><Layout><Tlc /></Layout></Route>
      <Route path="/terco-dos-homens"><Layout><TercoHomens /></Layout></Route>
      <Route path="/catequese"><Layout><Catequese /></Layout></Route>
      <Route path="/pascom"><Layout><Pascom /></Layout></Route>
      <Route path="/liturgia"><Layout><Liturgia /></Layout></Route>
      <Route path="/coral"><Layout><Coral /></Layout></Route>

      {/* Outros */}
      <Route path="/contato"><Layout><Contato /></Layout></Route>
      <Route path="/dizimo"><Layout><Dizimo /></Layout></Route>

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
