
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DataProvider } from "@/context/DataContext";

import ProvidersPage from "./pages/ProvidersPage";
import DevelopersPage from "./pages/DevelopersPage";
import VoicesPage from "./pages/VoicesPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import PhoneNumbersPage from "./pages/PhoneNumbersPage";
import CallHistoryPage from "./pages/CallHistoryPage";
import AgentSetupPage from "./pages/AgentSetupPage";
import BatchesPage from "./pages/BatchesPage";
import VoiceLabPage from "./pages/VoiceLabPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DataProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/agent-setup" replace />} />
            <Route path="/agent-setup" element={<AgentSetupPage />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/voices" element={<VoicesPage />} />
            <Route path="/voice-lab" element={<VoiceLabPage />} />
            <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
            <Route path="/phone-numbers" element={<PhoneNumbersPage />} />
            <Route path="/call-history" element={<CallHistoryPage />} />
            <Route path="/batches" element={<BatchesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </DataProvider>
  </QueryClientProvider>
);

export default App;
