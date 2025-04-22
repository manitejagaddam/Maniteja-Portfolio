import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-medium text-white">{skill.name}</h3>
        <span className="text-xs text-gray-400">{skill.level}%</span>
      </div>
      
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 to-teal-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
      
      <span className="text-xs text-gray-500 block mt-1">{skill.category}</span>
    </div>
  );
};

export default SkillBar;