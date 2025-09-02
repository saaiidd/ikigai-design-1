const Services = () => {
  const services = [
    {
      id: 1,
      timestamp: '2024-08-30_14:22:07',
      title: 'CUSTOM WEB DEVELOPMENT',
      slug: 'full-stack-development',
      preview: 'End-to-end web application development using modern frameworks like React, Next.js, and Node.js. From concept to deployment.',
      status: 'AVAILABLE',
      classification: 'CORE-SERVICE'
    },
    {
      id: 2,
      timestamp: '2024-08-28_09:15:33',
      title: 'E-COMMERCE SOLUTIONS',
      slug: 'ecommerce-platforms',
      preview: 'Complete online store development with payment integration, inventory management, and customer analytics.',
      status: 'FEATURED',
      classification: 'SPECIALTY'
    },
    {
      id: 3,
      timestamp: '2024-08-25_16:48:12',
      title: 'UI/UX DESIGN SYSTEMS',
      slug: 'design-systems',
      preview: 'Modern, accessible design systems that scale with your business. Clean interfaces that users love to interact with.',
      status: 'ACTIVE',
      classification: 'DESIGN-LEAD'
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="status-indicator" />
            <span className="font-terminal text-sm text-accent tracking-wider">
              SERVICE_CATALOG.LOG
            </span>
          </div>
          <h2 className="font-surveillance text-3xl md:text-4xl font-bold mb-4">
            STUDIO SERVICES
          </h2>
          <p className="font-terminal text-sm text-muted-foreground max-w-2xl">
            Core capabilities and specialized services offered by Ikigai Web Studio. 
            Each service is engineered for maximum impact and client satisfaction.
          </p>
        </div>

        {/* Service Entries */}
        <div className="space-y-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group border border-divider p-6 cursor-surveillance hover:border-accent/50 transition-colors duration-300"
            >
              {/* Service Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="font-terminal text-xs text-accent">
                  SERVICE_ID: {service.timestamp}
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                  <span className={`
                    px-2 py-1 text-xs font-terminal tracking-wider
                    ${service.status === 'AVAILABLE' ? 'bg-foreground text-background' : ''}
                    ${service.status === 'ACTIVE' ? 'bg-accent text-background' : ''}
                    ${service.status === 'FEATURED' ? 'redacted-bar' : ''}
                  `}>
                    {service.status}
                  </span>
                  <span className="font-terminal text-xs border border-accent/30 px-2 py-1">
                    {service.classification}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-3">
                <h3 className="font-surveillance text-xl font-semibold glitch-hover group-hover:animate-glitch">
                  {service.title}
                </h3>
                <p className="font-terminal text-sm text-muted-foreground leading-relaxed">
                  {service.preview}
                </p>
                
                {/* Access Link */}
                <div className="pt-2">
                  <a
                    href={`#${service.slug}`}
                    className="inline-flex items-center font-terminal text-xs text-foreground hover:text-accent transition-colors duration-200"
                  >
                    &gt; REQUEST_QUOTE --service {service.slug}
                    <span className="ml-2 w-2 h-px bg-current animate-pulse" />
                  </a>
                </div>
              </div>

              {/* Service Bar Graphic */}
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
              <span className="font-terminal text-xs">SERVICE_MANAGER.DB</span>
              <div className="terminal-dots">
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <div className="terminal-dot" />
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="font-terminal text-xs mb-3 text-accent">
                &gt; query --all --available
              </div>
              <button className="btn-terminal">
                CONTACT_STUDIO --discuss-project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;