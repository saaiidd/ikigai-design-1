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
        
        {/* Story Section */}
        <section id="story" className="relative py-32 bg-background border-y border-divider overflow-hidden">
          {/* Background HUD Grid */}
          <div className="hud-overlay absolute inset-0 opacity-20" />
          
          {/* Scanning Lines */}
          <div className="scanning-lines absolute inset-0 opacity-30" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center mb-6">
                <span className="status-indicator" />
                <span className="font-terminal text-sm text-accent tracking-wider">
                  PROCESS_ARCHITECTURE.PROTOCOL
                </span>
              </div>
              <h2 className="font-surveillance text-4xl md:text-5xl font-bold mb-6">
                <div className="wd2-glitch wd2-pixel-sort" data-text="OUR STORY">
                  OUR STORY
                </div>
              </h2>
              <p className="font-terminal text-lg text-muted-foreground max-w-2xl mx-auto">
                Three-phase deployment protocol for digital transformation
              </p>
            </div>

            {/* Process Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Entrance Phase */}
              <div className="group relative">
                <div className="terminal-window h-full">
                  <div className="terminal-header">
                    <span className="font-terminal text-xs">PHASE_01.EXE</span>
                    <div className="terminal-dots">
                      <div className="terminal-dot bg-accent" />
                      <div className="terminal-dot" />
                      <div className="terminal-dot" />
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Phase Icon */}
                    <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center">
                      <span className="font-terminal text-lg">01</span>
                    </div>
                    
                    <div>
                      <h3 className="font-surveillance text-xl mb-3 glitch-hover">
                        ENTRANCE
                      </h3>
                      <p className="font-surveillance text-sm text-muted-foreground leading-relaxed mb-4">
                        Initial consultation to understand your vision, goals, and technical requirements for your digital presence.
                      </p>
                      <div className="font-terminal text-xs text-accent space-y-1">
                        <div>&gt; phase: entrance</div>
                        <div>&gt; duration: 1–2 weeks</div>
                        <div>&gt; status: <span className="text-foreground">ACTIVE</span></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="scanning-lines absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Planning Phase */}
              <div className="group relative">
                <div className="terminal-window h-full">
                  <div className="terminal-header">
                    <span className="font-terminal text-xs">PHASE_02.EXE</span>
                    <div className="terminal-dots">
                      <div className="terminal-dot bg-accent" />
                      <div className="terminal-dot bg-accent" />
                      <div className="terminal-dot" />
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Phase Icon */}
                    <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center">
                      <span className="font-terminal text-lg">02</span>
                    </div>
                    
                    <div>
                      <h3 className="font-surveillance text-xl mb-3 glitch-hover">
                        PLANNING
                      </h3>
                      <p className="font-surveillance text-sm text-muted-foreground leading-relaxed mb-4">
                        Strategic architecture design, wireframing, and technical specification documentation for optimal execution.
                      </p>
                      <div className="font-terminal text-xs text-accent space-y-1">
                        <div>&gt; phase: planning</div>
                        <div>&gt; duration: 1–3 weeks</div>
                        <div>&gt; status: <span className="text-foreground">READY</span></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="scanning-lines absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Execution Phase */}
              <div className="group relative">
                <div className="terminal-window h-full">
                  <div className="terminal-header">
                    <span className="font-terminal text-xs">PHASE_03.EXE</span>
                    <div className="terminal-dots">
                      <div className="terminal-dot bg-accent" />
                      <div className="terminal-dot bg-accent" />
                      <div className="terminal-dot bg-accent" />
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Phase Icon */}
                    <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center">
                      <span className="font-terminal text-lg">03</span>
                    </div>
                    
                    <div>
                      <h3 className="font-surveillance text-xl mb-3 glitch-hover">
                        EXECUTION
                      </h3>
                      <p className="font-surveillance text-sm text-muted-foreground leading-relaxed mb-4">
                        Development, testing, and deployment of your modern, responsive website with ongoing support protocols.
                      </p>
                      <div className="font-terminal text-xs text-accent space-y-1">
                        <div>&gt; phase: execution</div>
                        <div>&gt; duration: 2–6 weeks</div>
                        <div>&gt; status: <span className="text-foreground">DEPLOY</span></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="scanning-lines absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Bottom Terminal Stats */}
            <div className="mt-20 text-center">
              <div className="inline-block terminal-window">
                <div className="terminal-header">
                  <span className="font-terminal text-xs">PROCESS_STATS.LOG</span>
                  <div className="terminal-dots">
                    <div className="terminal-dot" />
                    <div className="terminal-dot" />
                    <div className="terminal-dot" />
                  </div>
                </div>
                <div className="p-4 text-left">
                  <div className="font-terminal text-xs leading-relaxed space-y-1">
                    <div>&gt; total_projects_completed: 47</div>
                    <div>&gt; average_delivery_time: 3.2_weeks</div>
                    <div>&gt; client_satisfaction_rate: 98.7%</div>
                    <div>&gt; process_optimization: <span className="text-foreground">CONTINUOUS</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
