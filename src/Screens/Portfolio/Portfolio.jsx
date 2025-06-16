import React from "react";
import "./Portfolio.css";
function Portfolio() {
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
    <div>
      Portfolio
      <button class="bg-blue-500 text-white px-4 py-2 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
        Save Changes
      </button>
    </div>
  );
}

export default Portfolio;
