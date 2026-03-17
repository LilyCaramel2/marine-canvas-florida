import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import TidioChatbot from "./components/TidioChatbot";

// ── Lazy-loaded pages ─────────────────────────────────────────────────────────
// Core
const Home                   = lazy(() => import("./pages/Home"));
const About                  = lazy(() => import("./pages/About"));
const Services               = lazy(() => import("./pages/Services"));
const ServiceDetail          = lazy(() => import("./pages/ServiceDetail"));
const ServiceBiminiTops      = lazy(() => import("./pages/ServiceBiminiTops"));
const ServiceEnclosures      = lazy(() => import("./pages/ServiceEnclosures"));
const ServiceBoatCovers      = lazy(() => import("./pages/ServiceBoatCovers"));
const ServiceUpholstery      = lazy(() => import("./pages/ServiceUpholstery"));
const Gallery                = lazy(() => import("./pages/Gallery"));
const Blog                   = lazy(() => import("./pages/Blog"));
const BlogPostDetail         = lazy(() => import("./pages/BlogPostDetail"));
const Contact                = lazy(() => import("./pages/Contact"));
const Projects               = lazy(() => import("./pages/Projects"));
const ProjectDetail          = lazy(() => import("./pages/ProjectDetail"));
const Privacy                = lazy(() => import("./pages/Privacy"));
const Cookies                = lazy(() => import("./pages/Cookies"));
const NotFound               = lazy(() => import("./pages/NotFound"));

// Sailing
const SailingWithUs          = lazy(() => import("./pages/SailingWithUs"));
const SailingContactForm     = lazy(() => import("./pages/SailingContactForm"));

// Industrial
const Industrial             = lazy(() => import("./pages/Industrial"));
const Cleanroom              = lazy(() => import("./pages/Cleanroom"));
const LargeFacility          = lazy(() => import("./pages/LargeFacility"));
const Showcase               = lazy(() => import("./pages/Showcase"));
const EquipmentProtection    = lazy(() => import("./pages/industrial/EquipmentProtection"));
const ShadingSolutions       = lazy(() => import("./pages/industrial/ShadingSolutions"));

// Geo-targeted landing pages
const CleanroomsTampa        = lazy(() => import("./pages/geo/CleanroomsTampa"));
const DataCenterMiami        = lazy(() => import("./pages/geo/DataCenterMiami"));
const EquipmentCoversOrlando = lazy(() => import("./pages/geo/EquipmentCoversOrlando"));

// ── Page loading fallback ─────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground tracking-wide">Loading…</p>
      </div>
    </div>
  );
}

// ── Router ────────────────────────────────────────────────────────────────────
function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        {/* Specific service routes MUST come before generic :slug route */}
        <Route path="/services/bimini-tops" component={ServiceBiminiTops} />
        <Route path="/services/enclosures" component={ServiceEnclosures} />
        <Route path="/services/boat-covers" component={ServiceBoatCovers} />
        <Route path="/services/upholstery" component={ServiceUpholstery} />
        {/* Generic service detail route */}
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPostDetail} />
        <Route path="/contact" component={Contact} />
        {/* Industrial routes */}
        <Route path="/industrial" component={Industrial} />
        <Route path="/industrial/clean-room" component={Cleanroom} />
        <Route path="/industrial/clean-room-curtains" component={Cleanroom} />
        <Route path="/industrial/clean-room-equipment-covers" component={LargeFacility} />
        <Route path="/industrial/clean-room-containment" component={Showcase} />
        <Route path="/industrial/equipment-protection" component={EquipmentProtection} />
        <Route path="/industrial/shading-solutions" component={ShadingSolutions} />
        {/* Geo-targeted industrial landing pages */}
        <Route path="/industrial/cleanrooms-tampa" component={CleanroomsTampa} />
        <Route path="/industrial/data-center-containment-miami" component={DataCenterMiami} />
        <Route path="/industrial/equipment-covers-orlando" component={EquipmentCoversOrlando} />
        {/* Sailing */}
        <Route path="/sailing-with-us" component={SailingWithUs} />
        <Route path="/sailing-contact" component={SailingContactForm} />
        {/* Legal */}
        <Route path="/privacy" component={Privacy} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={true}>
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:p-3 focus:rounded-md focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-grow">
              <Router />
            </main>
            <Footer />
            <CookieConsent />
            <TidioChatbot />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
