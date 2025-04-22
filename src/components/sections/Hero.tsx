import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';
import { socialLinks } from '../../data/social';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Maniteja Gaddam
              </motion.span>
            </h1>
            <motion.h2
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-purple-500">AI Developer</span> | Creative Technologist
            </motion.h2>
            <motion.p
              className="text-gray-400 max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              I build exceptional digital experiences with cutting-edge technologies,
              crafting solutions that combine AI, creativity, and code.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {socialLinks.map((social) => (
              <SocialIcon key={social.id} social={social} />
            ))}
          </motion.div>

          <motion.a
            href="#about"
            className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-600 text-gray-400 hover:text-white hover:border-purple-500 transition-colors absolute bottom-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            data-hoverable="true"
          >
            <ArrowDownCircle size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;