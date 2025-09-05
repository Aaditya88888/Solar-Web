import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy imports (code splitting)
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Product = lazy(() => import("./components/Product"));
const Workwithus = lazy(() => import("./components/Workwithus"));
const Contact = lazy(() => import("./components/Contact"));
const SolarPanelPage = lazy(() => import("./components/SolarPanelPage"));
const SolarPumpPage = lazy(() => import("./components/SolarPumpPage"));
const MicroInverter = lazy(() => import("./components/MicroInverter"));
const Earthing = lazy(() => import("./components/Earthing"));
const La = lazy(() => import("./components/La"));
const GasGenset = lazy(() => import("./components/GasGenset"));
const Diesel = lazy(() => import("./components/Diesel"));
const Cursor = lazy(() => import("./components/Cursor"));
const SocialIcons = lazy(() => import("./components/SocialIcons"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const NewWorkWithUs = lazy(() => import("./components/NewWorkWithUs"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const FiveService = lazy(() => import("./components/FiveService"));
const FirstService = lazy(() => import("./components/FirstService"));
const FourService = lazy(() => import("./components/FourService"));
const ThirdService = lazy(() => import("./components/ThirdService"));
const SecondService = lazy(() => import("./components/SecondService"));
const SolarLanding = lazy(() => import("./components/SolarLanding"));
const Career = lazy(() => import("./components/Career"));
const PrivacySection = lazy(() => import("./components/PrivacySection"));
const SolarArticle = lazy(() => import("./components/SolarArticle"));
const SustainableProfitability = lazy(() =>
  import("./components/SustainableProfitability")
);
const BecomeOurIndividualPartner = lazy(() =>
  import("./components/BecomeOurIndividualPartner")
);
const AddOurServices = lazy(() => import("./components/AddOurServices"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

function App() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      {/* Components always visible */}
      <SolarLanding />
      <Cursor />
      <WhatsAppButton />
      <ScrollToTop />

      {/* Routing setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/workwithus" element={<NewWorkWithUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Solar-pannel" element={<SolarPanelPage />} />
        <Route path="/Solar-Pump" element={<SolarPumpPage />} />
        <Route path="/Micro-Inverter" element={<MicroInverter />} />
        <Route path="/Earthing" element={<Earthing />} />
        <Route path="/LA" element={<La />} />
        <Route path="/Diesel/Petrol Genset" element={<Diesel />} />
        <Route path="/ProjectDetails" element={<ProjectDetails />} />
        <Route
          path="/Installation_&_Commissioning_(INC)"
          element={<FirstService />}
        />
        <Route
          path="/Engineering_Procurement_and_Construction_(EPC)"
          element={<SecondService />}
        />
        <Route
          path="/Operations_&_Maintenance_(O&M)"
          element={<ThirdService />}
        />
        <Route
          path="/Annual_Maintenance_Contracts(AMC)"
          element={<FourService />}
        />
        <Route path="/Health_Check_ups" element={<FiveService />} />
        <Route path="/privacy" element={<PrivacySection />} />
        <Route path="/Blog1" element={<SolarArticle />} />
        <Route path="/Blog2" element={<SustainableProfitability />} />
        <Route
          path="/become-partner"
          element={<BecomeOurIndividualPartner />}
        />
        <Route path="/add-our-services" element={<AddOurServices />} />
      </Routes>
    </Suspense>
  );
}

export default App;
