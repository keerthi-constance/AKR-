import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AkrSonsBikeStore from "./pages/AkrSonsBikeStore";
import NotFound from "./pages/NotFound";
import AkrMultiComplex from "./pages/AkrMultiComplex";
import HotelRooms from "./pages/HotelRooms";
import AkrConstruction from "./pages/AkrConstruction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/akr-sons-bike-store" element={<AkrSonsBikeStore />} />
          <Route path="/akr-multi-complex" element={<AkrMultiComplex />} />
          <Route path="/multi-complex/hotel-rooms" element={<HotelRooms />} />
          <Route path="/akr-construction" element={<AkrConstruction />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
