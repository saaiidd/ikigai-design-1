import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="studio-mode min-h-screen bg-background text-foreground cursor-surveillance">
      {/* Global Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Portfolio Showcase */}
        <Portfolio />
        
        {/* Services & Insights */}
        <Services />
        
        {/* About Studio */}
        <About />
      </main>
      
      {/* Footer / Contact */}
      <Footer />
    </div>
  );
};

export default Index;
