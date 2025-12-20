import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const clients = [
    { name: 'SPS Les Vergers', logo: 'SPS', url: 'https://readdy.link/preview/199dc748-0611-494c-a174-512e89cd425a/1674724' },
    { name: 'Prince Limousine Cars', logo: 'PL', url: 'https://prince-car.vercel.app/' },
    { name: 'Royal Star Restaurant', logo: 'RS', url: 'https://royal-star.ch/' },
    { name: 'Google Developer Group-Prayagraj', logo: 'GDG', url: 'https://gdgprayagraj.com/' },
    { name: 'Bhaktimay', logo: 'BM', url: 'https://www.bhaktimay.in/' },
    { name: 'European Organization for Nuclear Research', logo: 'CERN', url: 'https://home.cern/' },
    { name: 'Nirvana Restaurant', logo: 'NR', url: 'https://new.nirvana-geneve.ch/' },
    { name: 'WikiClub Tech', logo: 'WCT', url: 'https://www.wikiclubtech.org/' },
    { name: 'United Group of Institutions', logo: 'UGI', url: 'https://uitmap.com/' },
    { name: 'Imani Food', logo: 'IF', url: 'https://imani-food.vercel.app/' },
    { name: 'Devfest Prayagraj', logo: 'DP', url: 'https://devfest.gdgprayagraj.com/' },      
    { name: 'La-Meyrinoise', logo: 'LM', url: 'https://la-meyrinoise.vercel.app/' },
    { name: 'Meyrin-Vergers Pharmacy', logo: 'MV', url: 'https://meyrin-vergers.vercel.app/' },
    { name: 'La-Voie Lactee', logo: 'LV', url: 'https://la-voie-lactee.vercel.app/' },
  ];

  const duplicatedClients = [...clients];

  return (
    <section id="clients" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Results for <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Delivering AI solutions that close more clients and grow recurring revenue.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="glass-effect rounded-2xl p-6 text-left">
              <div className="text-4xl font-bold text-gradient mb-2">30+</div>
              <p className="text-gray-300">
                clients closed across restaurants, professional services, education, and more.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-left">
              <div className="text-4xl font-bold text-gradient mb-2">12+</div>
              <p className="text-gray-300">
                recurring clients using our monthly automation, marketing, and growth services.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-left">
              <div className="text-4xl font-bold text-gradient mb-2">27%</div>
              <p className="text-gray-300">
                average profit uplift companies see after implementing our systems.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{
              x: ['0%', '-70%'],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-12 items-center w-max"
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 group"
              >
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="glass-effect rounded-2xl p-8 w-64 h-32 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center mb-3 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                      {client.logo}
                    </div>
                    <div className="font-semibold text-center text-gray-300 group-hover:text-white transition-colors">
                      {client.name}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
