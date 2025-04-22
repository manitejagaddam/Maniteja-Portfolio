import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

type IconName = keyof typeof Icons;

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = Icons[service.icon as IconName];

  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-purple-500 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.3)'
      }}
      data-hoverable="true"
    >
      <div className="mb-4 p-3 bg-purple-900/30 inline-block rounded-lg text-purple-400">
        {Icon && <Icon size={28} />}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;