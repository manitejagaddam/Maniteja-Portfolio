import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';
import { socialLinks } from '../../data/social';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="text-purple-500">Dev</span>Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Building digital experiences that matter.
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-3 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((social) => (
              <SocialIcon key={social.id} social={social} />
            ))}
          </motion.div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-500 text-sm mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            whileHover={{ y: -3 }}
            aria-label="Scroll to top"
            data-hoverable="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;