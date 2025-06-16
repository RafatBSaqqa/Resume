import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code,
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  ExternalLink,
} from "lucide-react";

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React & React Native", level: 95 },
    { name: "TypeScript/JavaScript", level: 90 },
    { name: "Node.js & Express", level: 85 },
    { name: "Mobile Banking Apps", level: 92 },
    { name: "MongoDB & PostgreSQL", level: 80 },
    { name: "Git & GitHub", level: 88 },
  ];

  const experiences = [
    {
      title: "Associate Software Developer",
      company: "Professional for Smart Technology",
      period: "2024 - present",
      description:
        "Developed customer-facing mobile banking application for Nova Bank",
      achievements: [
        "Wallet services (Cliq top-ups, eFawateercom bill payments)",
        "Fund transfers (same-bank, domestic, and international)",
        "Core banking features with financial product management",
      ],
    },
  ];

  const projects = [
    {
      title: "Academia - Course Management System",
      description: "Full-stack web application built during Meraki Bootcamp",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Redux"],
      link: "#",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-6 z-10">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <Code className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
                RAFAT ALSAQQA
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in animation-delay-300">
                SOFTWARE DEVELOPER
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in animation-delay-500">
                Android & React Native Developer specializing in mobile banking
                and financial applications. Skilled in front-end development,
                cross-platform solutions, and delivering secure, user-centric
                banking experiences.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in animation-delay-700">
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <Mail className="w-7 h-7 text-white-600" />
                <a
                  href="mailto:rafat.saqqa@gmail.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transform hover:scale-105 transition-all duration-200"
                >
                  rafat.saqqa@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <Phone className="w-7 h-7 text-white-600" />
                <a
                  href="tel:+962777396184"
                  className="border border-purple-500 text-purple-400 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  +962777396184
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-blue-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform transition-all duration-1000 group-hover:scale-105"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className=" max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="rounded-md bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="p-8 ">
                  <div className="flex items-start gap-4 ">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-400 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-300 mb-2">{exp.company}</p>
                      <p className="text-sm text-purple-400 mb-4">
                        {exp.period}
                      </p>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start gap-2"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="rounded-md bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-purple-400 mb-2">
                      Meraki Academy
                    </h3>
                    <p className="text-gray-300 mb-2">
                      Full-Stack Web Development Bootcamp
                    </p>
                    <p className="text-sm text-gray-400 mb-2">2023 - 2024</p>
                    <p className="text-gray-400 text-sm">
                      700+ hours of intensive coding, building projects, and
                      solving problems
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-md bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-2">
                      Al Balqa Applied University
                    </h3>
                    <p className="text-gray-300 mb-2">
                      Bachelor of Software Engineering
                    </p>
                    <p className="text-sm text-gray-400 mb-2">2023 - 2024</p>
                    <p className="bg-yellow-600 py-1 px-2 rounded-md text-sm text-yellow-100">
                      Teachers' Scholarship Award
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-400 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <p
                            key={i}
                            className="py-1 px-2 rounded-md text-sm border border-green-500 text-green-400"
                          >
                            {tech}
                          </p>
                        ))}
                      </div>
                    </div>
                    <button className="py-2 px-3 rounded-md   bg-green-600 hover:bg-green-700">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Languages
          </h2>
          <div className="flex justify-center gap-8">
            {["Arabic", "English", "German"].map((lang, index) => (
              <div key={lang} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Languages className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 font-medium">{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-16 bg-black/40 backdrop-blur-sm border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <Mail className="w-5 h-5 mr-2" />
              <a
                href="mailto:rafat.saqqa@gmail.com"
                className="py-1 px-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200"
              >
                Email Me
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <Linkedin className="w-5 h-5 mr-2" />
              <a
                href="https://www.linkedin.com/in/rafat-saqqa/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-2 rounded-md border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <Github className="w-5 h-5 mr-2" />
              <a
                href="https://github.com/RafatBSaqqa"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-2 rounded-md border border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="text-gray-400">
            © 2024 Rafat Alsaqqa. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
