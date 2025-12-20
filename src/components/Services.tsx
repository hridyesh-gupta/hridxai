import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Bot, Megaphone, Globe2, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  activeService?: 'automation' | 'marketing' | 'web' | 'design';
  onActiveServiceChange?: (service: 'automation' | 'marketing' | 'web' | 'design') => void;
}

const Services = ({ activeService: activeServiceProp, onActiveServiceChange }: ServicesProps) => {
  const [internalActiveService, setInternalActiveService] = useState<
    'automation' | 'marketing' | 'web' | 'design'
  >('automation');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activeService = activeServiceProp ?? internalActiveService;

  const setActiveService = (service: 'automation' | 'marketing' | 'web' | 'design') => {
    if (onActiveServiceChange) {
      onActiveServiceChange(service);
    } else {
      setInternalActiveService(service);
    }
  };

  const services = {
    automation: {
      icon: Bot,
      title: 'AI Automation Services',
      description: 'Use AI workflows to capture, qualify, and manage clients automatically.',
      points: [
        {
          name: 'Client Generation',
          description: 'Use AI workflows to identify, engage, and convert potential clients automatically.',
        },
        {
          name: 'Calling Agents',
          description: 'Deploy voice-based AI agents to handle calls, schedule meetings, and qualify leads.',
        },
        {
          name: 'Workflow Automation',
          description: 'Streamline repetitive business operations through intelligent, rule-based automations.',
        },
        {
          name: 'Social Media Automation',
          description:
            'Auto-generate posts, captions, and schedules to maintain consistent brand presence across platforms like Instagram and Facebook.',
        },
        {
          name: 'WhatsApp Chatbot',
          description: 'Automate lead capture, replies, and follow-ups on WhatsApp with CRM integration.',
        },
        {
          name: 'Chatbot Website Integration',
          description: 'Embed AI chatbots on websites for instant customer support and inquiry management.',
        },
        {
          name: 'Lead Management',
          description: 'Capture and manage leads from all channels with automated sequences.',
        },
        {
          name: 'YouTube Automation',
          description: 'Auto-create thumbnails, descriptions, and publish videos at optimal engagement times.',
        },
        {
          name: 'Agent Call Management',
          description: 'Route qualified leads to agents, track calls, and requeue missed follow-ups automatically.',
        },
        {
          name: 'Post-Counseling Integration',
          description: 'Sync meeting outcomes and follow-ups with CRM and app for easy customer onboarding.',
        },
      ],
      diagram: ['Awareness', 'Engagement', 'Qualification', 'Conversion'],
    },
    marketing: {
      icon: Megaphone,
      title: 'Digital Marketing Services',
      description: 'Full-funnel performance marketing to drive visibility, engagement, and conversions.',
      points: [
        {
          name: 'Google Ads',
          description:
            'Run targeted ad campaigns to maximize visibility and lead generation through search and display networks.',
        },
        {
          name: 'Meta Ads',
          description:
            'Drive engagement and conversions across Facebook and Instagram with optimized creatives and audience targeting.',
        },
        {
          name: 'LinkedIn Ads',
          description:
            'Build B2B connections and generate high-quality professional leads through precision-targeted campaigns.',
        },
        {
          name: 'Email Marketing',
          description: 'Automate personalized email flows to nurture leads and re-engage existing customers.',
        },
        {
          name: 'Product Image & Video Ads',
          description:
            'Create visually appealing ad creatives and videos to boost click-through and conversion rates.',
        },
        {
          name: 'Social Engagement Automation',
          description: 'Instantly reply to comments and DMs using AI for faster responses and lead capture.',
        },
        {
          name: 'AI-Powered Shorts & Auto-Clipping',
          description:
            'Automatically convert long-form videos into engaging YouTube Shorts to increase reach.',
        },
        {
          name: 'AI Character Videos',
          description:
            'Create AI-powered character videos that mimic your appearance and voice to maintain an active social media presence when you lack time.',
        },
        {
          name: 'Ads & Outreach Optimization',
          description:
            'Continuously improve Google and Meta ad campaigns with automated lead flow and performance tracking.',
        },
      ],
      diagram: ['Traffic', 'Engagement', 'Leads', 'Revenue'],
    },
    web: {
      icon: Globe2,
      title: 'Website & App Services',
      description: 'High-performing websites and app experiences that turn visitors into clients.',
      points: [
        {
          name: 'Website & Portfolio Development',
          description:
            'Build professional, high-performing websites that highlight brand identity and services.',
        },
        {
          name: 'E-commerce Solutions',
          description:
            'Create seamless online stores with integrated payments, inventory, and automation.',
        },
        {
          name: 'Booking System Integration',
          description:
            'Integrate booking portals on your websites for effortless appointment and service booking.',
        },
        {
          name: 'Website UI/UX Redesign',
          description: 'Revamp existing websites with modern, conversion-focused designs.',
        },
        {
          name: 'SEO Optimisation',
          description:
            'Enhance visibility and ranking through on-page and technical SEO improvements.',
        },
        {
          name: 'App Integration',
          description:
            'Sync app data and user activity with CRM for a unified business tracking system.',
        },
      ],
      diagram: ['Strategy', 'Design', 'Build', 'Launch'],
    },
    design: {
      icon: Palette,
      title: 'Design & Branding Services',
      description: 'Branding and design that clearly communicates your value and elevates every touchpoint.',
      points: [
        {
          name: 'Logo & Brand Assets',
          description:
            'Design a cohesive brand identity that communicates your company’s values and personality.',
        },
        {
          name: 'Presentation Design',
          description:
            'Craft visually impactful pitch decks and business presentations that engage audiences.',
        },
        {
          name: 'UI & UX Design',
          description:
            'Design intuitive, attractive, and user-focused interfaces that enhance customer experience.',
        },
        {
          name: 'Product Image & Video Ads',
          description:
            'Create visually appealing ad creatives and videos to boost click-through and conversion rates.',
        },
      ],
      diagram: ['Discovery', 'Identity', 'Design', 'Delivery'],
    },
  };

  const ActiveIcon = services[activeService].icon;

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed for measurable business impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-full p-2 inline-flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveService('automation')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === 'automation'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                AI Automation
              </div>
            </button>
            <button
              onClick={() => setActiveService('marketing')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === 'marketing'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Megaphone className="w-5 h-5" />
                Digital Marketing
              </div>
            </button>
            <button
              onClick={() => setActiveService('web')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === 'web'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5" />
                Website & App
              </div>
            </button>
            <button
              onClick={() => setActiveService('design')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === 'design'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Design & Branding
              </div>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ActiveIcon className="w-10 h-10 text-blue-400" />
                <h3 className="text-3xl font-bold">{services[activeService].title}</h3>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                {services[activeService].description}
              </p>

              <div className="space-y-4 mb-8">
                {services[activeService].points.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-gray-200 font-semibold">{item.name}</span>
                      <span className="text-gray-400 text-sm mt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-200">
                        {item.description}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-200 hover:scale-105 flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="glass-effect rounded-3xl p-8">
              <motion.div
                key={`diagram-${activeService}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {services[activeService].diagram.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <span className="text-lg font-semibold">{step}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                    {index < services[activeService].diagram.length - 1 && (
                      <div className="absolute left-6 top-full w-0.5 h-6 bg-gradient-to-b from-blue-500 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
