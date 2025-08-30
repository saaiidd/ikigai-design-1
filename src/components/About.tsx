const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center mb-4">
                <span className="status-indicator" />
                <span className="font-terminal text-sm text-accent tracking-wider">
                  OPERATIVE_PROFILE.DAT
                </span>
              </div>
              <h2 className="font-surveillance text-3xl md:text-4xl font-bold mb-6">
                DIGITAL SURVEILLANCE SPECIALIST
              </h2>
            </div>

            {/* Manifesto */}
            <div className="space-y-6 font-terminal text-sm leading-relaxed">
              <p>
                In the intersection between analog authenticity and digital precision lies 
                the future of visual investigation. Every frame captured tells a story—
                surveillance-grade documentation that reveals truth through high-contrast reality.
              </p>
              
              <p>
                The harsh flash of 2000s photography exposes what polished digital imagery 
                conceals. Grain, dust, and light leaks become evidence. Contact sheets 
                transform into investigative tools. Each photograph is a piece of intelligence 
                in the larger surveillance network.
              </p>

              <div className="bg-background/50 border border-accent/20 p-6 my-8">
                <h3 className="font-surveillance text-lg font-semibold mb-4 text-foreground">
                  MISSION PARAMETERS
                </h3>
                <ul className="space-y-2 text-accent">
                  <li>&gt; Document urban truth through analog techniques</li>
                  <li>&gt; Expose digital deception via high-contrast reality</li>
                  <li>&gt; Archive critical visual intelligence</li>
                  <li>&gt; Maintain surveillance-grade documentation standards</li>
                </ul>
              </div>

              <p>
                This is not photography—this is visual intelligence gathering. Each project 
                represents a case file in the ongoing investigation of contemporary digital culture, 
                shot with the unforgiving honesty of surveillance-grade equipment.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="mt-12">
              <h3 className="font-surveillance text-xl font-semibold mb-6">
                OPERATIONAL CAPABILITIES
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="font-surveillance text-sm font-semibold text-accent">
                    STRATEGY
                  </div>
                  <div className="font-terminal text-xs space-y-1">
                    <div>&gt; Visual Investigation</div>
                    <div>&gt; Surveillance Planning</div>
                    <div>&gt; Intelligence Analysis</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-surveillance text-sm font-semibold text-accent">
                    DESIGN
                  </div>
                  <div className="font-terminal text-xs space-y-1">
                    <div>&gt; HUD Interface Design</div>
                    <div>&gt; Terminal UI Systems</div>
                    <div>&gt; Surveillance Aesthetics</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-surveillance text-sm font-semibold text-accent">
                    BUILD
                  </div>
                  <div className="font-terminal text-xs space-y-1">
                    <div>&gt; Analog Documentation</div>
                    <div>&gt; Digital Archives</div>
                    <div>&gt; Evidence Processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Film Strip */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Classified Header */}
              <div className="border border-accent/30 p-4">
                <div className="font-terminal text-xs text-accent mb-2">
                  CLEARANCE_LEVEL: 7
                </div>
                <div className="redacted-bar text-xs mb-2">
                  CLASSIFIED INFORMATION
                </div>
                <div className="font-terminal text-xs leading-relaxed">
                  Operative specializes in high-contrast visual intelligence gathering 
                  using analog surveillance techniques.
                </div>
              </div>

              {/* Equipment List */}
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="font-terminal text-xs">EQUIPMENT.INV</span>
                  <div className="terminal-dots">
                    <div className="terminal-dot" />
                    <div className="terminal-dot" />
                    <div className="terminal-dot" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-terminal text-xs space-y-2">
                    <div>&gt; Camera: Film SLR Systems</div>
                    <div>&gt; Flash: On-camera strobes</div>
                    <div>&gt; Film: HP5, Tri-X, T-MAX</div>
                    <div>&gt; Processing: Darkroom certified</div>
                    <div>&gt; Digital: Surveillance-grade</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="font-surveillance text-sm font-semibold">
                  SECURE COMMUNICATION
                </div>
                <div className="font-terminal text-xs space-y-2">
                  <div>surveillance@archive-noir.net</div>
                  <div>Signal: +1-555-NOIR-001</div>
                  <div>PGP: Available on request</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;