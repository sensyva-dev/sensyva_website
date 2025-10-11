import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import About from './components/About';
import Vision from './components/Vision';
import WhyNow from './components/WhyNow';
import Industries from './components/Industries';
import MedicalDeviceService from './components/MedicalDeviceService';
import CaseStudies from './components/CaseStudies';
import CaseStudyDownload from './components/CaseStudyDownload';
import Approach from './components/Approach';
import Origin from './components/Origin';
import DataGapAudit from './components/DataGapAudit';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <About />
      <Vision />
      <WhyNow />
      <Industries />
      <MedicalDeviceService />
      <CaseStudies />
      <CaseStudyDownload />
      <Approach />
      <Origin />
      <DataGapAudit />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
