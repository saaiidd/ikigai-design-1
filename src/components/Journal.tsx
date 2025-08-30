const Journal = () => {
  const signals = [
    {
      id: 1,
      timestamp: '2024-08-30_14:22:07',
      title: 'DIGITAL SURVEILLANCE PATTERNS',
      slug: 'surveillance-pattern-analysis',
      preview: 'Analyzing the intersection of analog photography techniques with modern digital surveillance systems...',
      status: 'ENCRYPTED',
      classification: 'LEVEL-3'
    },
    {
      id: 2,
      timestamp: '2024-08-28_09:15:33',
      title: 'CONTACT SHEET ARCHAEOLOGY',
      slug: 'contact-sheet-methodology',
      preview: 'Exploring the forensic nature of contact sheets as investigative tools in visual documentation...',
      status: 'DECLASSIFIED',
      classification: 'PUBLIC'
    },
    {
      id: 3,
      timestamp: '2024-08-25_16:48:12',
      title: 'FLASH PHOTOGRAPHY FORENSICS',
      slug: 'flash-forensics-2000s',
      preview: 'The harsh truth of on-camera flash: How early 2000s photography techniques reveal urban authenticity...',
      status: 'ACTIVE',
      classification: 'LEVEL-2'
    }
  ];

  return (
    <section id="journal" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="status-indicator" />
            <span className="font-terminal text-sm text-accent tracking-wider">
              SIGNAL_INTELLIGENCE.LOG
            </span>
          </div>
          <h2 className="font-surveillance text-3xl md:text-4xl font-bold mb-4">
            INTERCEPTED SIGNALS
          </h2>
          <p className="font-terminal text-sm text-muted-foreground max-w-2xl">
            Field reports and intelligence gathered from surveillance operations. 
            Each entry contains classified insights into visual investigation techniques.
          </p>
        </div>

        {/* Signal Entries */}
        <div className="space-y-8">
          {signals.map((signal) => (
            <article
              key={signal.id}
              className="group border border-divider p-6 cursor-surveillance hover:border-accent/50 transition-colors duration-300"
            >
              {/* Signal Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="font-terminal text-xs text-accent">
                  TIMESTAMP: {signal.timestamp}
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                  <span className={`
                    px-2 py-1 text-xs font-terminal tracking-wider
                    ${signal.status === 'ENCRYPTED' ? 'redacted-bar' : ''}
                    ${signal.status === 'ACTIVE' ? 'bg-foreground text-background' : ''}
                    ${signal.status === 'DECLASSIFIED' ? 'bg-accent text-background' : ''}
                  `}>
                    {signal.status}
                  </span>
                  <span className="font-terminal text-xs border border-accent/30 px-2 py-1">
                    {signal.classification}
                  </span>
                </div>
              </div>

              {/* Signal Content */}
              <div className="space-y-3">
                <h3 className="font-surveillance text-xl font-semibold glitch-hover group-hover:animate-glitch">
                  {signal.title}
                </h3>
                <p className="font-terminal text-sm text-muted-foreground leading-relaxed">
                  {signal.preview}
                </p>
                
                {/* Access Link */}
                <div className="pt-2">
                  <a
                    href={`#${signal.slug}`}
                    className="inline-flex items-center font-terminal text-xs text-foreground hover:text-accent transition-colors duration-200"
                  >
                    &gt; ACCESS_FILE --decrypt {signal.slug}
                    <span className="ml-2 w-2 h-px bg-current animate-pulse" />
                  </a>
                </div>
              </div>

              {/* Redacted Bar Graphic */}
              <div className="mt-4 flex gap-1">
                <div className="w-16 h-1 bg-accent/30" />
                <div className="w-8 h-1 bg-foreground" />
                <div className="w-12 h-1 bg-accent/30" />
              </div>
            </article>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-16">
          <div className="terminal-window max-w-md mx-auto">
            <div className="terminal-header">
              <span className="font-terminal text-xs">SIGNAL_ARCHIVE.DB</span>
              <div className="terminal-dots">
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <div className="terminal-dot" />
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="font-terminal text-xs mb-3 text-accent">
                &gt; query --all --classified
              </div>
              <button className="btn-terminal">
                VIEW_ARCHIVE --full-access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;