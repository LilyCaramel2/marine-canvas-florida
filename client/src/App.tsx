import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceBiminiTops from "./pages/ServiceBiminiTops";
import ServiceEnclosures from "./pages/ServiceEnclosures";
import ServiceBoatCovers from "./pages/ServiceBoatCovers";
import ServiceUpholstery from "./pages/ServiceUpholstery";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SailingWithUs from "./pages/SailingWithUs";
import SailingContactForm from "./pages/SailingContactForm";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import TidioChatbot from "./components/TidioChatbot";

function Router() {
  return (
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
      <Route path="/contact" component={Contact} />
      <Route path="/sailing-with-us" component={SailingWithUs} />
      <Route path="/sailing-contact" component={SailingContactForm} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/cookies" component={Cookies} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable={true}
      >
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:p-3 focus:rounded-md focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary">
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
