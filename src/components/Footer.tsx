import InteractiveTerminal from './InteractiveTerminal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="py-16 px-6 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Interactive Contact Terminal */}
          <div className="md:col-span-2">
            <InteractiveTerminal 
              title="SECURE_CONTACT.EXE"
              initialOutput={[
                '> establishing_secure_connection...',
                '> email: hello@ikigai.dev',
                '> signal: encrypted_channel_available',
                '> location: classified_coordinates', 
                '> response_time: < 24_hours',
                '> connection_status: SECURED'
              ]}
              availableCommands={{
                'contact': {
                  command: 'contact',
                  output: [
                    'Contact Information:',
                    'Email: hello@ikigai.dev',
                    'Response Time: < 24 hours',
                    'Consultation: Free',
                    'Project Start: 1-2 weeks',
                    'All communications encrypted.'
                  ]
                },
                'services': {
                  command: 'services',
                  output: [
                    'Available Services:',
                    '• Website Development',
                    '• UI/UX Design', 
                    '• Performance Optimization',
                    '• Maintenance & Support',
                    '• Custom Web Applications',
                    'Simple. Modern. Affordable.'
                  ]
                },
                'quote': {
                  command: 'quote',
                  output: [
                    'Project Quote Process:',
                    '1. Send project details to hello@ikigai.dev',
                    '2. Free consultation call',
                    '3. Custom quote within 24h',
                    '4. Clear timeline & pricing',
                    'No hidden fees. No surprises.'
                  ],
                  type: 'success'
                },
                'team': {
                  command: 'team',
                  output: [
                    'Team Ikigai:',
                    'b3hold - Lead Engineer',
                    '• Full-stack development',
                    '• Computer Engineering graduate',
                    '',
                    'alcatraz.js - Design Lead', 
                    '• UI/UX Design',
                    '• Computer Engineering graduate'
                  ]
                }
              }}
              className="h-80"
            />
          </div>

          {/* ASCII Map & Metadata */}
          <div className="space-y-6">
            {/* ASCII City Map */}
            <div>
              <div className="font-surveillance text-sm font-semibold mb-3">
                OPERATIONAL AREA
              </div>
              <div className="font-terminal text-xs text-accent leading-none">
                <pre className="whitespace-pre">
{`┌─────────┐
│ █ ▄ █ ▄ │
│ ▄ █ ▄ █ │  GRID_47N
│ █ ▄ ● ▄ │  SECTOR_C
│ ▄ █ ▄ █ │
└─────────┘`}
                </pre>
              </div>
            </div>

            {/* System Metadata */}
            <div>
              <div className="font-surveillance text-sm font-semibold mb-3">
                SYSTEM_METADATA
              </div>
              <div className="font-terminal text-xs text-muted-foreground space-y-1">
                <div>build_v2.1.7</div>
                <div>surveillance_protocol: active</div>
                <div>uptime: 247.days</div>
                <div>last_backup: {new Date().toISOString().split('T')[0]}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-divider">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <div className="font-terminal text-xs text-muted-foreground">
              © {currentYear} ARCHIVE/NOIR. All surveillance data classified.
            </div>

            {/* Site Navigation */}
            <div className="flex items-center gap-6">
              {['WORK', 'JOURNAL', 'ABOUT', 'CONTACT'].map((item) => (
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
              <span className="text-accent">OPERATIONAL</span>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <div className="font-terminal text-xs text-accent/70">
              This site is under surveillance. All interactions are monitored and logged.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;