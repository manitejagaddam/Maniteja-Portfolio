import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SocialLink } from '../../types';

interface SocialIconProps {
  social: SocialLink;
}

type IconName = keyof typeof Icons;

const SocialIcon: React.FC<SocialIconProps> = ({ social }) => {
  const Icon = Icons[social.icon as IconName];

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 0 8px rgba(128, 90, 213, 0.8)' 
      }}
      data-hoverable="true"
      aria-label={social.name}
    >
      {Icon && <Icon size={18} />}
    </motion.a>
  );
};

export default SocialIcon;