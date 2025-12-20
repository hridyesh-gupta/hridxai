import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  username: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 mb-4">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.username}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials: Testimonial[] = [
    {
      name: 'Alex Martin',
      username: 'SPS Les Vergers',
      content:
        'HridxAI automated our lead capture, follow-ups, and reminders. Phone and WhatsApp flows now run on autopilot, and our calendar stays full without us manually chasing every enquiry.',
      avatar: 'A',
    },
    {
      name: 'Prince Rodríguez',
      username: 'Prince Limousine Cars',
      content:
        'With the new website and booking system HridxAI built for us, most enquiries are handled instantly. Bookings sync automatically, and our team can focus on delivering a great ride.',
      avatar: 'R',
    },
    {
      name: 'Micco Stahel',
      username: 'Nirvana Restaurant',
      content:
        'HridxAI gave us a modern website with integrated booking and automated reviews. We see more direct reservations and better repeat visits without extra marketing effort.',
      avatar: 'P',
    },
    {
      name: 'Rohan Mehta',
      username: 'Bhaktimay',
      content:
        'Their digital marketing and automation stack manages our enquiries, WhatsApp conversations, and online sessions. Our team spends more time with students and less on admin work.',
      avatar: 'R',
    },
    {
      name: 'Michael Koch',
      username: 'Royal Star Restaurant',
      content:
        'We combined a fresh web presence from HridxAI with automated follow-ups and feedback collection. Table occupancy and online orders have both increased without hiring more staff.',
      avatar: 'A',
    },
    {
      name: 'Vivek Kumar',
      username: 'Google Developer Group-Prayagraj',
      content:
        'HridxAI helped us with event websites, registration funnels, and automated communication. Organising GDG Prayagraj events is smoother now because routine coordination is handled for us.',
      avatar: 'V',
    },
    {
      name: 'Marie Dubois',
      username: 'European Organization for Nuclear Research',
      content:
        'Working with HridxAI on web and tooling upgrades helped us present complex programmes more clearly. Visitors and participants get a fast, reliable experience that reflects our standards.',
      avatar: 'M',
    },
    {
      name: 'Ankit',
      username: 'WikiClub Tech',
      content:
        'Our community events, registrations, and outreach are much easier to manage now. HridxAI’s web and automation support keeps our members informed and engaged with far less manual work.',
      avatar: 'K',
    },
    {
      name: 'Gaurav Gulati',
      username: 'United Group of Institutions',
      content:
        'The digital experiences and integrations HridxAI built make it easier for students to discover programmes and stay updated. We finally have a setup that can grow with us.',
      avatar: 'N',
    },
    {
      name: 'Imani K.',
      username: 'Imani Food',
      content:
        'Our new website and branding from HridxAI showcase our products beautifully. Orders are easier to capture and track, and we have a clear view of customers from first enquiry to repeat buys.',
      avatar: 'I',
    },
    {
      name: 'Aditya Jain',
      username: 'Devfest Prayagraj',
      content:
        'For Devfest Prayagraj, the event website and automation flows handled registrations, reminders, and updates. The event felt much more organised and participation was higher than before.',
      avatar: 'S',
    },
    {
      name: 'Claire Moreau',
      username: 'La-Meyrinoise',
      content:
        'HridxAI created a clean, modern digital presence for us. Our offer is easier to understand online, and we are seeing more inbound interest from local customers.',
      avatar: 'C',
    },
    {
      name: 'Dr. Lucas Meyer',
      username: 'Meyrin-Vergers Pharmacy',
      content:
        'The clear and trustworthy web experience HridxAI built, plus simple automation, makes it easier for patients to find information and reach out. It reflects the level of care we aim to provide.',
      avatar: 'L',
    },
    {
      name: 'Sophie Bernard',
      username: 'La-Voie Lactee',
      content:
        'Our concept is now presented beautifully online. HridxAI gave us a strong brand and web foundation, and we feel ready to add more automation and growth campaigns on top.',
      avatar: 'S',
    },
  ];

  const columnSize = Math.ceil(testimonials.length / 3);
  const column1 = testimonials.slice(0, columnSize);
  const column2 = testimonials.slice(columnSize, columnSize * 2);
  const column3 = testimonials.slice(columnSize * 2);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from businesses that chose to automate with intelligence
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-h-[600px] overflow-hidden"
          >
            <motion.div
              animate={{
                y: [0, -1000],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="space-y-4"
            >
              {[...column1, ...column1].map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>

            <motion.div
              animate={{
                y: [0, -1000],
              }}
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="space-y-4"
            >
              {[...column2, ...column2].map((testimonial, index) => (
                <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>

            <motion.div
              animate={{
                y: [0, -1000],
              }}
              transition={{
                duration: 17,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="space-y-4"
            >
              {[...column3, ...column3].map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
