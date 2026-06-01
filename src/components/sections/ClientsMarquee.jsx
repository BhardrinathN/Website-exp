import SectionHeading from '../ui/SectionHeading';
import { fallbackClients } from '../../lib/fallbackData';

const ClientsMarquee = () => {
  // Duplicate the list for seamless looping
  const duplicatedClients = [...fallbackClients, ...fallbackClients];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Clients"
          subtitle=""
        />
      </div>

      {/* Marquee */}
      <div className="marquee-container mt-8">
        <div className="marquee-track">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client._id}-${index}`}
              className="bg-white border border-slate-200 rounded-lg px-8 py-4 mx-4 flex-shrink-0 flex items-center justify-center min-w-[160px] h-24"
            >
              {client.logo ? (
                <>
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                    loading="lazy" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <span className="font-bold text-xl text-slate-400 whitespace-nowrap hidden">
                    {client.name}
                  </span>
                </>
              ) : (
                <span className="font-bold text-xl text-slate-400 whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
