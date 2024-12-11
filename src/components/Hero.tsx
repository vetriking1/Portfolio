import React from "react";
import { Github, Linkedin, Download } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import LeetCodeIcon from "./leetcode-svgrepo-com.svg";
import HackerRankIcon from "./hackerrank-brands-solid.svg";
import ProfilePhoto from "./my_photo.png";
const Hero = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div
            ref={elementRef}
            className={`space-y-6 ${
              isVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 text-transparent bg-clip-text animate-typing">
                Hello World
              </h1>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                I am Vetri selvan
              </h2>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              AI Engineer & Researcher passionate about creating innovative
              solutions
            </p>

            <div className="flex space-x-6">
              <a href="/vsmresume.pdf" download className="btn-primary">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>

            <div className="flex space-x-8">
              <SocialLink
                href="https://github.com/vetriking1"
                icon={<Github />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/vetri-selvan-790022254/"
                icon={<Linkedin />}
              />

              <SocialLink
                href="https://leetcode.com/your-leetcode-username"
                icon={
                  <img
                    src={LeetCodeIcon}
                    alt="LeetCode"
                    style={{ width: 24, height: 24 }}
                  />
                }
              />
              <SocialLink
                href="https://www.hackerrank.com/profile/vking1060"
                icon={
                  <img
                    src={HackerRankIcon}
                    alt="LeetCode"
                    style={{ width: 24, height: 24 }}
                  />
                }
              />
            </div>
          </div>

          {/* Right side image */}
          <div
            className={`relative ${isVisible ? "animate-float" : "opacity-0"}`}
          >
            <div className="relative z-10">
              <img
                src={ProfilePhoto}
                alt="Profile"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl" />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
  >
    {icon}
  </a>
);

export default Hero;
