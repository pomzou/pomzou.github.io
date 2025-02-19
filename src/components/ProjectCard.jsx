import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 
                 hover:shadow-md transition-all cursor-pointer group"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 
                         group-hover:text-blue-600 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 
                              group-hover:translate-x-1 transition-all" />
            </div>

            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;