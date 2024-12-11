import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "Java", "C", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "Pandas",
        "NumPy",
        "React",
        "Flask"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "Git",
        "GitHub",
        "Firebase",
        "VS Code",
        "Jupyter Notebook",
        "Google Colab"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 section-gradient dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills</h2>
        <div 
          ref={elementRef}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 gradient-border animate-slide-up ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;