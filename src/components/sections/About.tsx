import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SkillBar from "../ui/SkillBar";
import { skills } from "../../data/skills";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 relative z-10"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better: my journey, skills and what drives me in the world of technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-12">
          {/* My Journey Section */}
          <motion.article
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3
              className="text-4xl font-semibold text-white mb-2"
              id="about-heading"
            >
              My <span className="text-purple-500">Journey</span>
            </h3>
            <p className="text-gray-400">
              Over the past 2 years, I’ve been deeply engaged in developing
              meaningful digital applications, with a strong focus on Artificial
              Intelligence, Machine Learning, and modern web development. My
              journey began with curiosity and a drive to build, evolving into a
              passion for crafting smart, user-friendly solutions.
            </p>
            <p className="text-gray-400">
              I enjoy bridging the gap between AI concepts and real-world
              use—whether through intelligent systems or dynamic web platforms.
              Each project is an opportunity to deliver elegant, practical, and
              impactful solutions.
            </p>
            <p className="text-gray-400">
              Beyond coding, I explore new technologies, collaborate on
              open-source projects, and seek creative inspiration from the world
              around me. I believe continuous learning is at the heart of
              meaningful innovation.
            </p>
          </motion.article>

          {/* My Skills Section */}
          <motion.aside
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-semibold text-white mb-4">
              My <span className="text-purple-500">Skills</span>
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillBar key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
