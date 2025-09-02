import contact01 from '@/assets/contact-01.jpg';
import contact02 from '@/assets/contact-02.jpg';
import contact03 from '@/assets/contact-03.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-COMMERCE PLATFORM',
      image: contact01,
      frameNumber: 'WEB-01',
      exif: 'React • Next.js • Stripe • PostgreSQL • 2024',
      status: 'LIVE',
      date: '2024-08-15',
      url: 'ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'RESTAURANT BOOKING SYSTEM',
      image: contact02,
      frameNumber: 'WEB-02',
      exif: 'TypeScript • Node.js • MongoDB • Tailwind • 2024',
      status: 'ACTIVE',
      date: '2024-08-22',
      url: 'restaurant-booking.app'
    },
    {
      id: 3,
      title: 'PORTFOLIO SHOWCASE',
      image: contact03,
      frameNumber: 'WEB-03',
      exif: 'React • Vite • Framer Motion • Vercel • 2024',
      status: 'LAUNCHED',
      date: '2024-08-28',
      url: 'creative-portfolio.dev'
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="status-indicator" />
            <span className="font-terminal text-sm text-accent tracking-wider">
              PROJECT_ARCHIVE.DATABASE
            </span>
          </div>
          <h2 className="font-surveillance text-3xl md:text-4xl font-bold mb-4">
            RECENT PROJECTS
          </h2>
          <p className="font-terminal text-sm text-muted-foreground max-w-2xl">
            A curated selection of web applications and digital experiences crafted for clients. 
            Each project represents a unique solution built with modern technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid-contact-sheet">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-surveillance"
            >
              {/* Frame Container */}
              <div 
                className="contact-frame relative overflow-hidden aspect-square"
                data-frame-number={project.frameNumber}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={`Web project screenshot: ${project.title}`}
                  className="w-full h-full object-cover film-grain transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
                
                {/* Tech Stack Overlay */}
                <div className="exif-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.exif}
                </div>

                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`
                    px-2 py-1 text-xs font-terminal tracking-wider
                    ${project.status === 'ACTIVE' ? 'bg-foreground text-background' : ''}
                    ${project.status === 'LIVE' ? 'bg-accent text-background' : ''}
                    ${project.status === 'LAUNCHED' ? 'redacted-bar' : ''}
                  `}>
                    {project.status}
                  </span>
                </div>

                {/* Scanning Effect on Hover */}
                <div className="scanning-lines absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="mt-3 space-y-2">
                <h3 className="font-surveillance text-lg font-semibold glitch-hover">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-xs font-terminal text-accent">
                  <span>LAUNCH: {project.date}</span>
                  <span>ID: {project.frameNumber}</span>
                </div>
                <div className="text-xs font-terminal text-muted-foreground">
                  {project.url}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Terminal */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="font-terminal text-xs">PORTFOLIO_VIEWER.EXE</span>
                <div className="terminal-dots">
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                </div>
              </div>
              <div className="p-4">
                <button className="btn-terminal">
                  &gt; LOAD_ALL_PROJECTS --full-archive
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;