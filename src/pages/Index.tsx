import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ContactSheet from '@/components/ContactSheet';
import Journal from '@/components/Journal';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="surveillance-mode min-h-screen bg-background text-foreground cursor-surveillance">
      {/* Global Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section with Surveillance Overlay */}
        <Hero />
        
        {/* Case Studies / Contact Sheet Gallery */}
        <ContactSheet />
        
        {/* Journal / Signals */}
        <Journal />
        
        {/* About / Manifesto */}
        <About />
      </main>
      
      {/* Footer / Contact */}
      <Footer />
    </div>
  );
};

export default Index;
