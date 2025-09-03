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
        
        {/* Story Section */}
        <section id="story" className="py-24 bg-background border-b border-divider">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Entrance */}
              <div className="space-y-4">
                <h3 className="font-surveillance text-lg tracking-wider text-foreground">
                  ENTRANCE
                </h3>
                <p className="font-surveillance text-sm text-muted-foreground leading-relaxed">
                  Initial consultation to understand your vision, goals, and technical requirements for your digital presence.
                </p>
                <div className="font-terminal text-xs text-accent">
                  &gt; phase: entrance | dur: 1–2 weeks
                </div>
              </div>
              
              {/* Planning */}
              <div className="space-y-4">
                <h3 className="font-surveillance text-lg tracking-wider text-foreground">
                  PLANNING
                </h3>
                <p className="font-surveillance text-sm text-muted-foreground leading-relaxed">
                  Strategic architecture design, wireframing, and technical specification documentation for optimal execution.
                </p>
                <div className="font-terminal text-xs text-accent">
                  &gt; phase: planning | dur: 1–3 weeks
                </div>
              </div>
              
              {/* Execution */}
              <div className="space-y-4">
                <h3 className="font-surveillance text-lg tracking-wider text-foreground">
                  EXECUTION
                </h3>
                <p className="font-surveillance text-sm text-muted-foreground leading-relaxed">
                  Development, testing, and deployment of your modern, responsive website with ongoing support protocols.
                </p>
                <div className="font-terminal text-xs text-accent">
                  &gt; phase: execution | dur: 2–6 weeks
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
