
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DataProvider } from "@/context/DataContext";

import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/agent-setup" element={<AgentSetupPage />} />
            <Route path="/dashboard/providers" element={<ProvidersPage />} />
            <Route path="/dashboard/developers" element={<DevelopersPage />} />
            <Route path="/dashboard/voices" element={<VoicesPage />} />
            <Route path="/dashboard/voice-lab" element={<VoiceLabPage />} />
            <Route path="/dashboard/knowledge-base" element={<KnowledgeBasePage />} />
            <Route path="/dashboard/phone-numbers" element={<PhoneNumbersPage />} />
            <Route path="/dashboard/call-history" element={<CallHistoryPage />} />
            <Route path="/dashboard/batches" element={<BatchesPage />} />
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/agent-setup" element={<Navigate to="/dashboard/agent-setup" replace />} />
            <Route path="/providers" element={<Navigate to="/dashboard/providers" replace />} />
            <Route path="/developers" element={<Navigate to="/dashboard/developers" replace />} />
            <Route path="/voices" element={<Navigate to="/dashboard/voices" replace />} />
            <Route path="/voice-lab" element={<Navigate to="/dashboard/voice-lab" replace />} />
            <Route path="/knowledge-base" element={<Navigate to="/dashboard/knowledge-base" replace />} />
            <Route path="/phone-numbers" element={<Navigate to="/dashboard/phone-numbers" replace />} />
            <Route path="/call-history" element={<Navigate to="/dashboard/call-history" replace />} />
            <Route path="/batches" element={<Navigate to="/dashboard/batches" replace />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </DataProvider>
  </QueryClientProvider>
);

export default App;
