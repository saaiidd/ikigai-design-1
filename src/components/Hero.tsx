import heroImage from '@/assets/hero-surveillance.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Surveillance Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Surveillance-grade urban landscape with high contrast black and white photography"
          className="w-full h-full object-cover film-grain"
        />
        <div className="absolute inset-0 bg-background/20" />
        
        {/* HUD Grid Overlay */}
        <div className="hud-overlay absolute inset-0" />
        
        {/* Scanning Lines */}
        <div className="scanning-lines absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status Indicator */}
        <div className="inline-flex items-center mb-8 text-xs font-terminal tracking-wider">
          <span className="status-indicator" />
          <span className="redacted-bar">SIGNAL ACQUIRED</span>
        </div>

        {/* Main Headlines */}
        <h1 className="mb-6">
          <div className="font-surveillance text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-2">
            <span className="glitch-hover">SURVEILLANCE-GRADE</span>
          </div>
          <div className="font-surveillance text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            <span className="glitch-hover">DESIGN</span>
          </div>
        </h1>

        {/* Subheadline */}
        <div className="mb-12">
          <p className="font-surveillance text-lg md:text-xl lg:text-2xl font-light tracking-wide text-foreground/90">
            ANALOG SOUL. DIGITAL PRECISION.
          </p>
          <div className="mt-4 font-terminal text-sm text-accent">
            <span className="inline-block border border-accent/30 px-3 py-1">
              CLASSIFIED: LEVEL 7 CLEARANCE
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-surveillance px-8 py-3">
            VIEW CASES
          </button>
          <button className="btn-terminal px-8 py-3">
            &gt; OPEN_JOURNAL.EXE
          </button>
        </div>

        {/* Terminal Info */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="font-terminal text-xs">SYSTEM STATUS</span>
              <div className="terminal-dots">
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <div className="terminal-dot" />
              </div>
            </div>
            <div className="p-4 text-left">
              <div className="font-terminal text-xs leading-relaxed">
                <div>&gt; surveillance_mode: ACTIVE</div>
                <div>&gt; cameras_online: 247</div>
                <div>&gt; last_update: {new Date().toISOString().split('T')[0]}</div>
                <div>&gt; status: <span className="text-foreground">OPERATIONAL</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;