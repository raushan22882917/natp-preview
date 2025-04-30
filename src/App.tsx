import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Apply from "./pages/Apply";
import Publication from "./pages/services/Publication";
import Article from "./pages/services/Article";
import Services from "./pages/Services";
import SEO from "./pages/services/SEO";
import TrademarkDetail from "./pages/TrademarkDetail";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminCreate from "./pages/AdminCreate";
import AdminSettings from "./pages/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/services/publication" element={<Publication />} />
          <Route path="/services/article" element={<Article />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/trademark/:id" element={<TrademarkDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/create" element={<AdminCreate />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
