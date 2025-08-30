import contact01 from '@/assets/contact-01.jpg';
import contact02 from '@/assets/contact-02.jpg';
import contact03 from '@/assets/contact-03.jpg';

const ContactSheet = () => {
  const cases = [
    {
      id: 1,
      title: 'OPERATION NIGHTFALL',
      image: contact01,
      frameNumber: '001A',
      exif: 'ILFORD HP5 • 50mm • f/2 • 1/125 • ISO 400',
      status: 'CLASSIFIED',
      date: '2024-08-15'
    },
    {
      id: 2,
      title: 'URBAN SURVEILLANCE NET',
      image: contact02,
      frameNumber: '007B',
      exif: 'TRI-X 400 • 35mm • f/2.8 • 1/60 • ISO 400',
      status: 'ACTIVE',
      date: '2024-08-22'
    },
    {
      id: 3,
      title: 'SIGNAL INTERCEPT',
      image: contact03,
      frameNumber: '012C',
      exif: 'KODAK T-MAX • 85mm • f/1.8 • 1/250 • ISO 800',
      status: 'ARCHIVED',
      date: '2024-08-28'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="status-indicator" />
            <span className="font-terminal text-sm text-accent tracking-wider">
              CASE_FILES.DATABASE
            </span>
          </div>
          <h2 className="font-surveillance text-3xl md:text-4xl font-bold mb-4">
            ACTIVE INVESTIGATIONS
          </h2>
          <p className="font-terminal text-sm text-muted-foreground max-w-2xl">
            Classified operations captured through high-contrast surveillance photography. 
            Each frame represents critical intelligence gathered from the field.
          </p>
        </div>

        {/* Contact Sheet Grid */}
        <div className="grid-contact-sheet">
          {cases.map((case_item) => (
            <div
              key={case_item.id}
              className="group cursor-surveillance"
            >
              {/* Frame Container */}
              <div 
                className="contact-frame relative overflow-hidden aspect-square"
                data-frame-number={case_item.frameNumber}
              >
                {/* Image */}
                <img
                  src={case_item.image}
                  alt={`Surveillance photograph: ${case_item.title}`}
                  className="w-full h-full object-cover film-grain transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
                
                {/* EXIF Overlay */}
                <div className="exif-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {case_item.exif}
                </div>

                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`
                    px-2 py-1 text-xs font-terminal tracking-wider
                    ${case_item.status === 'ACTIVE' ? 'bg-foreground text-background' : ''}
                    ${case_item.status === 'CLASSIFIED' ? 'redacted-bar' : ''}
                    ${case_item.status === 'ARCHIVED' ? 'bg-accent text-background' : ''}
                  `}>
                    {case_item.status}
                  </span>
                </div>

                {/* Scanning Effect on Hover */}
                <div className="scanning-lines absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Frame Info */}
              <div className="mt-3 space-y-2">
                <h3 className="font-surveillance text-lg font-semibold glitch-hover">
                  {case_item.title}
                </h3>
                <div className="flex items-center justify-between text-xs font-terminal text-accent">
                  <span>DATE: {case_item.date}</span>
                  <span>FRAME: {case_item.frameNumber}</span>
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
                <span className="font-terminal text-xs">ARCHIVE_ACCESS.EXE</span>
                <div className="terminal-dots">
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                </div>
              </div>
              <div className="p-4">
                <button className="btn-terminal">
                  &gt; LOAD_MORE_CASES --decrypt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSheet;