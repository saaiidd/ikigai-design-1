const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="py-16 px-6 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Terminal */}
          <div className="md:col-span-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="font-terminal text-xs">STUDIO_CONTACT.EXE</span>
                <div className="terminal-dots">
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="font-terminal text-sm">
                  <div className="text-accent mb-4">
                    &gt; establishing_connection...
                  </div>
                  <div className="space-y-2">
                    <div>&gt; email: hello@ikigai-web.dev</div>
                    <div>&gt; discord: available_for_consultation</div>
                    <div>&gt; timezone: available_globally</div>
                    <div>&gt; response_time: &lt; 24_hours</div>
                    <div>&gt; project_slots: open_for_bookings</div>
                  </div>
                  <div className="mt-6 text-accent">
                    &gt; connection_status: <span className="text-foreground">READY_TO_BUILD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ASCII Map & Metadata */}
          <div className="space-y-6">
            {/* ASCII Studio Layout */}
            <div>
              <div className="font-surveillance text-sm font-semibold mb-3">
                STUDIO SETUP
              </div>
              <div className="font-terminal text-xs text-accent leading-none">
                <pre className="whitespace-pre">
{`┌─────────┐
│ ◯ ▢ ◯ ▢ │
│ ▢ ◯ ● ◯ │  DESK_01
│ ◯ ▢ ◯ ▢ │  WORKSTATION
│ ▢ ◯ ▢ ◯ │
└─────────┘`}
                </pre>
              </div>
            </div>

            {/* System Metadata */}
            <div>
              <div className="font-surveillance text-sm font-semibold mb-3">
                STUDIO_METADATA
              </div>
              <div className="font-terminal text-xs text-muted-foreground space-y-1">
                <div>version: v2.1.7</div>
                <div>status: accepting_projects</div>
                <div>uptime: 100%</div>
                <div>last_deploy: {new Date().toISOString().split('T')[0]}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-divider">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <div className="font-terminal text-xs text-muted-foreground">
              © {currentYear} IKIGAI WEB STUDIO. All projects crafted with precision.
            </div>

            {/* Site Navigation */}
            <div className="flex items-center gap-6">
              {['PORTFOLIO', 'SERVICES', 'ABOUT', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-terminal text-xs text-accent hover:text-foreground transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center font-terminal text-xs">
              <span className="status-indicator" />
              <span className="text-accent">STUDIO_ONLINE</span>
            </div>
          </div>

          {/* Client Notice */}
          <div className="mt-6 text-center">
            <div className="font-terminal text-xs text-accent/70">
              Ready to bring your ideas online. Let's build something amazing together.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;