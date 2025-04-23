import React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import SocialIcon from "../ui/SocialIcon";
import { socialLinks } from "../../data/social";
import maniteja from "../../assets/mani.jpg";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center ">
      <div className="container mx-auto px-20 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:w-1/2"
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
              <span className="text-purple-500">AI Developer</span> | Creative
              Technologist
            </motion.h2>
            <motion.p
              className="text-gray-400 max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              I craft smart, impactful digital solutions by blending creativity
              with code — backed by strong problem-solving skills and hands-on
              experience in Machine Learning, Deep Learning, Generative AI (RAG
              & Agentic AI), and full-stack web development.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {socialLinks.map((social) => (
                <SocialIcon key={social.id} social={social} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Radial glow background */}

            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full bg-purple-600 opacity-20 blur-[220px] group-hover:opacity-40 transition-all duration-500"></div>
            </div>

            {/* Profile image with hover effects */}
            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg z-10 transition-all duration-500 transform group-hover:scale-125 group-hover:shadow-2xl">
              <img
                src={maniteja}
                alt="Maniteja Gaddam"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.a
          href="#about"
          className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-600 text-gray-400 hover:text-white hover:border-purple-500 transition-colors absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          data-hoverable="true"
        >
          <ArrowDownCircle size={20} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
