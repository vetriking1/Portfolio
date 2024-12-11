import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ModelShowcaseIMG from "./modelShowcase.png";
import TrafficIMG from "./traffic_project.png";
import AgriculturalIMG from "./farmerChatapp.jpg";

const Projects = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const projects = [
    {
      title: "AI-Powered Traffic Management System",
      description:
        "Designed and implemented a real-time intelligent traffic control system with 95% accuracy in vehicle detection.",
      tech: ["Python", "OpenCV", "YOLO", "Firebase"],
      image: TrafficIMG,
      projectLink: "https://github.com/vetriking1/Trafic_managment_system",
    },
    {
      title: "Full-Stack ML Model Deployment Platform",
      description:
        "Created a web platform showcasing ML models for various applications with RESTful API integration.",
      tech: ["React", "Flask", "TensorFlow", "Scikit-learn"],
      image: ModelShowcaseIMG,
      projectLink:
        "https://github.com/yourusername/ml-model-deployment-platform",
    },
    {
      title: "Agricultural Assistant Application",
      description:
        "Developed a Tamil-language platform for crop recommendations and disease detection.",
      tech: ["React Native", "Flask", "TensorFlow", "NLP"],
      image: AgriculturalIMG,
      projectLink: "https://github.com/vetriking1/ChatTamil/tree/master",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Projects</h2>
        <div
          ref={elementRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? "animate-slide-up visible" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm transform hover:scale-105 transition-transform duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.projectLink} className="project-link group">
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Code</span>
                  </a>
                  {/* <a href="#" className="project-link group">
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    <span>Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
