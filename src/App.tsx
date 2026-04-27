import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/app/ThemeProvider";
import { AppShell } from "@/components/app/AppShell";
import HomeScreen from "./pages/HomeScreen";
import ProductsScreen from "./pages/ProductsScreen";
import ProductDetailScreen from "./pages/ProductDetailScreen";
import WorkflowScreen from "./pages/WorkflowScreen";
import ReportsScreen from "./pages/ReportsScreen";
import EvidenceScreen from "./pages/EvidenceScreen";
import ContactScreen from "./pages/ContactScreen";
import BrochureScreen from "./pages/BrochureScreen";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppShell />}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/products/:slug" element={<ProductDetailScreen />} />
              <Route path="/workflow" element={<WorkflowScreen />} />
              <Route path="/reports" element={<ReportsScreen />} />
              <Route path="/evidence" element={<EvidenceScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="/brochure" element={<BrochureScreen />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
