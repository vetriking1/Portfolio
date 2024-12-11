import React from 'react';
import { Calendar, Award, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const experiences = [
    {
      title: "State-Level Codeathon 2023",
      description: "Secured 3rd place",
      type: "competition",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Java Internship",
      description: "7 days intensive training and practical experience",
      type: "internship",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: "Technical Symposium",
      description: "Winner in Programming Contest (2023) and Winner in Technical Quiz (2024)",
      type: "achievement",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Workshops & Training",
      items: [
        "Python Development",
        "Web Development",
        "Game Development",
        "UI/UX Design",
        "AR/VR Technology"
      ],
      type: "workshops",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 section-gradient dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experience & Achievements</h2>
        <div 
          ref={elementRef}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-16 ${isVisible ? 'animate-slide-in visible' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-3 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-400 transform -translate-x-1/2 animate-pulse" />

                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {exp.type === 'workshops' ? (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                        <span className="text-blue-600 dark:text-blue-400 transform group-hover:rotate-12 transition-transform duration-300">
                          {exp.icon}
                        </span>
                        <span className="ml-2">{exp.title}</span>
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {exp.items.map((item, i) => (
                          <li 
                            key={i}
                            className="flex items-center text-gray-600 dark:text-gray-300 transform hover:translate-x-2 transition-transform duration-300"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 transform group-hover:rotate-12 transition-transform duration-300">
                        {exp.icon}
                      </span>
                      <div className="ml-3">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
