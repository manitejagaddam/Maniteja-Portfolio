import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';
import { skills } from '../../data/skills';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me"
          subtitle="Get to know me better: my journey, skills and what drives me in the world of technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              My <span className="text-purple-500">Journey</span>
            </h3>
            <p className="text-gray-400 mb-6">
              With over 7 years of experience in software development, I've cultivated a passion for creating innovative digital solutions. My journey began with web development and evolved to include AI, machine learning, and IoT technologies.
            </p>
            <p className="text-gray-400 mb-6">
              I believe in building technology that solves real problems and improves lives. My approach combines technical expertise with creative thinking to deliver elegant, efficient solutions that exceed expectations.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying the outdoors to recharge my creative energy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              My <span className="text-purple-500">Skills</span>
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillBar 
                  key={skill.id} 
                  skill={skill} 
                  index={index} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;