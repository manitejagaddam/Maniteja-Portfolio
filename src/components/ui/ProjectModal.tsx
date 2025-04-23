import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Tag, Users } from 'lucide-react';
import { Project } from '../../types';
import Button from './Button';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-auto flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            data-hoverable="true"
          >
            <X size={24} />
          </button>

          {/* Project Image */}
          <div className="relative h-[300px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-[1]" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 z-[2]">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <h2 className="text-3xl font-bold text-white mt-2">{project.title}</h2>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 space-y-6">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar size={18} />
                <span>2023</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Tag size={18} />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users size={18} />
                <span>Team Project</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">About the Project</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              {project.link && (
                <Button
                  variant="primary"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Live
                </Button>
              )}
              {project.github && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;