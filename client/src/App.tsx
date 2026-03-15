1| import { Toaster } from "@/components/ui/sonner";
2| import { TooltipProvider } from "@/components/ui/tooltip";
3| import { Route, Switch } from "wouter";
4| import ErrorBoundary from "./components/ErrorBoundary";
5| import { ThemeProvider } from "./contexts/ThemeContext";
6| import Navbar from "./components/Navbar";
7| import Footer from "./components/Footer";
8| 
9| // Pages
10| import Home from "./pages/Home";
11| import About from "./pages/About";
12| import Services from "./pages/Services";
13| import ServiceDetail from "./pages/ServiceDetail";
14| import ServiceBiminiTops from "./pages/ServiceBiminiTops";
15| import ServiceEnclosures from "./pages/ServiceEnclosures";
16| import ServiceBoatCovers from "./pages/ServiceBoatCovers";
17| import ServiceUpholstery from "./pages/ServiceUpholstery";
18| import Gallery from "./pages/Gallery";
19| import Blog from "./pages/Blog";
20| import Contact from "./pages/Contact";
21| import Industrial from "./pages/Industrial";
22| import Cleanroom from "./pages/Cleanroom";
23| import LargeFacility from "./pages/LargeFacility";
24| import Showcase from "./pages/Showcase";
25| import EquipmentProtection from "./pages/industrial/EquipmentProtection";
26| import ShadingSolutions from "./pages/industrial/ShadingSolutions";
27| import SailingWithUs from "./pages/SailingWithUs";
28| import SailingContactForm from "./pages/SailingContactForm";
29| import Projects from "./pages/Projects";
30| import ProjectDetail from "./pages/ProjectDetail";
31| import Privacy from "./pages/Privacy";
32| import Cookies from "./pages/Cookies";
33| import NotFound from "./pages/NotFound";
34| import CookieConsent from "./components/CookieConsent";
35| import TidioChatbot from "./components/TidioChatbot";
36| 
37| function Router() {
38|   return (
39|     <Switch>
40|       <Route path="/" component={Home} />
41|       <Route path="/about" component={About} />
42|       <Route path="/services" component={Services} />
43|       {/* Specific service routes MUST come before generic :slug route */}
44|       <Route path="/services/bimini-tops" component={ServiceBiminiTops} />
45|       <Route path="/services/enclosures" component={ServiceEnclosures} />
46|       <Route path="/services/boat-covers" component={ServiceBoatCovers} />
47|       <Route path="/services/upholstery" component={ServiceUpholstery} />
48|       {/* Generic service detail route */}
49|       <Route path="/services/:slug" component={ServiceDetail} />
50|       <Route path="/gallery" component={Gallery} />
51|       <Route path="/projects" component={Projects} />
52|       <Route path="/projects/:id" component={ProjectDetail} />
53|       <Route path="/blog" component={Blog} />
54|       <Route path="/contact" component={Contact} />
55|       <Route path="/industrial" component={Industrial} />
56|       <Route path="/industrial/cleanroom" component={Cleanroom} />
57|       <Route path="/industrial/large-facility" component={LargeFacility} />
58|       <Route path="/industrial/showcase" component={Showcase} />
59|       <Route path="/industrial/equipment-protection" component={EquipmentProtection} />
60|       <Route path="/industrial/shading-solutions" component={ShadingSolutions} />
61|       <Route path="/sailing-with-us" component={SailingWithUs} />
62|       <Route path="/sailing-contact" component={SailingContactForm} />
63|       <Route path="/privacy" component={Privacy} />
64|       <Route path="/cookies" component={Cookies} />
65|       <Route path="/404" component={NotFound} />
66|       {/* Final fallback route */}
67|       <Route component={NotFound} />
68|     </Switch>
69|   );
70| }
71| 
72| function App() {
73|   return (
74|     <ErrorBoundary>
75|       <ThemeProvider defaultTheme="light" switchable={true}>
76|         <TooltipProvider>
77|           <Toaster />
78|           <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
79|             <a
80|               href="#main-content"
81|               className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:p-3 focus:rounded-md focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
82|             >
83|               Skip to main content
84|             </a>
85|             <Navbar />
86|             <main id="main-content" className="flex-grow">
87|               <Router />
88|             </main>
89|             <Footer />
90|             <CookieConsent />
91|             <TidioChatbot />
92|           </div>
93|         </TooltipProvider>
94|       </ThemeProvider>
95|     </ErrorBoundary>
96|   );
97| }
98| 
99| export default App;