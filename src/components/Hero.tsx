import heroImage from '@/assets/hero-surveillance.jpg';
import InteractiveTerminal from './InteractiveTerminal';

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
          <span className="redacted-bar">SYSTEM ONLINE</span>
        </div>

        {/* Main Headlines */}
        <h1 className="mb-6">
          <div className="font-surveillance text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-2">
            <span className="glitch-hover">SIMPLE, MODERN</span>
          </div>
          <div className="font-surveillance text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            <span className="glitch-hover">WEBSITES</span>
          </div>
        </h1>

        {/* Subheadline */}
        <div className="mb-12">
          <p className="font-surveillance text-lg md:text-xl lg:text-2xl font-light tracking-wide text-foreground/90">
            MAKE IDEAS USABLE ONLINE.
          </p>
          <div className="mt-4 font-terminal text-sm text-accent">
            <span className="inline-block border border-accent/30 px-3 py-1">
              CLARITY • SPEED • AFFORDABILITY
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-surveillance px-8 py-3">
            VIEW WORK
          </button>
          <button className="btn-terminal px-8 py-3">
            &gt; START_PROJECT.EXE
          </button>
        </div>

        {/* Interactive Terminal */}
        <div className="mt-16 max-w-md mx-auto">
          <InteractiveTerminal 
            title="SYSTEM STATUS"
            initialOutput={[
              `> websites_deployed: 127`,
              `> client_satisfaction: 98.7%`,
              `> last_update: ${new Date().toISOString().split('T')[0]}`,
              `> status: READY_TO_BUILD`
            ]}
            availableCommands={{
              'status': {
                command: 'status',
                output: [
                  'System Status: OPERATIONAL',
                  'Active Projects: 12',
                  'Queue: 3 pending builds',
                  'Server Load: 23%',
                  'All systems green.'
                ]
              },
              'deploy': {
                command: 'deploy',
                output: [
                  'Initiating deployment sequence...',
                  'Building optimized assets...',
                  'Uploading to secure servers...',
                  'Deployment complete!',
                  'Site is now live at: https://your-site.com'
                ],
                type: 'success'
              },
              'stats': {
                command: 'stats',
                output: [
                  'Performance Metrics:',
                  '• Page Load Time: <0.8s',
                  '• Lighthouse Score: 98/100',
                  '• Uptime: 99.97%',
                  '• Security Rating: A+',
                  '• Client Retention: 94%'
                ]
              },
              'clients': {
                command: 'clients',
                output: [
                  'Recent Client Activity:',
                  '• TechCorp - Site launched',
                  '• StartupXYZ - In development', 
                  '• LocalBiz - Redesign complete',
                  '• All clients satisfied ✓'
                ]
              }
            }}
          />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;