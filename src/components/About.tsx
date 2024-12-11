import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in">
            I am a passionate and dedicated individual with proficiency in machine learning and deep learning, 
            aspiring to become an AI Engineer and AI Researcher. My goal is to innovate and contribute to 
            the development of cutting-edge artificial intelligence technologies that solve real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;