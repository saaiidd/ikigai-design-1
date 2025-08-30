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
                  MISSION_BRIEF.DAT
                </span>
              </div>
              <h2 className="font-surveillance text-3xl md:text-4xl font-bold mb-6">
                IKIGAI WEB DEVELOPMENT
              </h2>
            </div>

            {/* Manifesto */}
            <div className="space-y-6 font-terminal text-sm leading-relaxed">
              <p>
                Our mission at Ikigai is to build simple, modern websites that help people 
                and businesses share their ideas with the world. We prioritise clean design, 
                smooth performance, and practical solutions that anyone can afford and use.
              </p>
              
              <p>
                Every project is crafted to make life easier and bring ideas to life online. 
                We believe in clarity over complexity, speed over bloat, and solutions that 
                work for real people solving real problems.
              </p>

              <div className="bg-background/50 border border-accent/20 p-6 my-8">
                <h3 className="font-surveillance text-lg font-semibold mb-4 text-foreground">
                  MISSION PARAMETERS
                </h3>
                <ul className="space-y-2 text-accent">
                  <li>&gt; Build simple, modern, affordable websites</li>
                  <li>&gt; Prioritise clarity, speed, and practical solutions</li>
                  <li>&gt; Help people and businesses share ideas online</li>
                  <li>&gt; Make technology accessible and usable for everyone</li>
                </ul>
              </div>

              <p>
                Led by two computer-engineering graduates, Ikigai combines technical expertise 
                with design excellence. Every line of code and pixel of design serves the 
                mission: making ideas usable online.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="mt-12">
              <h3 className="font-surveillance text-xl font-semibold mb-6">
                TEAM CAPABILITIES
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="font-surveillance text-sm font-semibold text-accent">
                    b3hold - LEAD ENGINEER
                  </div>
                  <div className="font-terminal text-xs space-y-1">
                    <div>&gt; Full-Stack Development</div>
                    <div>&gt; Performance Optimization</div>
                    <div>&gt; System Architecture</div>
                    <div>&gt; Computer Engineering Graduate</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-surveillance text-sm font-semibold text-accent">
                    alcatraz.js - DESIGN LEAD
                  </div>
                  <div className="font-terminal text-xs space-y-1">
                    <div>&gt; UI/UX Design Systems</div>
                    <div>&gt; Modern Web Interfaces</div>
                    <div>&gt; User Experience Strategy</div>
                    <div>&gt; Computer Engineering Graduate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Film Strip */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Company Brief */}
              <div className="border border-accent/30 p-4">
                <div className="font-terminal text-xs text-accent mb-2">
                  COMPANY_STATUS: ACTIVE
                </div>
                <div className="redacted-bar text-xs mb-2">
                  VERIFIED DEVELOPERS
                </div>
                <div className="font-terminal text-xs leading-relaxed">
                  Ikigai builds simple, modern, affordable websites. 
                  Computer-engineering graduates specializing in clean, fast web solutions.
                </div>
              </div>

              {/* Tech Stack */}
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="font-terminal text-xs">TECH_STACK.CFG</span>
                  <div className="terminal-dots">
                    <div className="terminal-dot" />
                    <div className="terminal-dot" />
                    <div className="terminal-dot" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-terminal text-xs space-y-2">
                    <div>&gt; Frontend: React, Next.js, Tailwind</div>
                    <div>&gt; Backend: Node.js, TypeScript</div>
                    <div>&gt; Database: PostgreSQL, MongoDB</div>
                    <div>&gt; Deploy: Vercel, Netlify, AWS</div>
                    <div>&gt; Tools: Modern dev workflow</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="font-surveillance text-sm font-semibold">
                  START A PROJECT
                </div>
                <div className="font-terminal text-xs space-y-2">
                  <div>hello@ikigai-web.dev</div>
                  <div>Available for new projects</div>
                  <div>Free consultation available</div>
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