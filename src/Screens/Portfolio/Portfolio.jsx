import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code2,
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  Menu,
  X,
  Rocket,
  Smartphone,
  ArrowUpRight,
  Download,
  Globe,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Static content — edit here, not in the JSX below.
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "business", label: "Business" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { name: "React.js", level: 95 },
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "React Native / Expo", level: 88 },
  { name: "Node.js & Express", level: 85 },
  { name: "MongoDB & PostgreSQL", level: 80 },
  { name: "Git & GitHub", level: 88 },
];

const EXPERIENCES = [
  {
    title: "Founder",
    company: "NativeKit Studio",
    period: "2026 — present",
    description:
      "Built and launched a production-ready React Native template business, selling premium mobile app starters to developers and agencies.",
    achievements: [
      "Designed and shipped 6+ premium React Native/Expo templates (fintech, real estate, food delivery, e-learning, and more)",
      "Built the storefront, checkout, and licensing flow end-to-end",
      "Owns product, design, engineering, and go-to-market",
      "Growing organic traffic through SEO-driven technical content (Expo changelogs, migration guides)",
    ],
  },
  {
    title: "Software Developer",
    company: "Professional for Smart Technology",
    period: "2024 — present",
    description: "Developed customer-facing banking software for Nova Bank.",
    achievements: [
      "Wallet services (Cliq top-ups, eFAWATEERcom bill payments)",
      "Fund transfers (same-bank, domestic, and international)",
      "Cheque management (cheque book creation and stop-cheque requests)",
      "Core banking features with financial product management",
    ],
  },
];

const EDUCATION = [
  {
    icon: GraduationCap,
    accent: "purple",
    school: "Meraki Academy",
    program: "Full-Stack Web Development Bootcamp",
    period: "2023 — 2024",
    detail:
      "700+ hours of intensive coding, building projects, and solving problems.",
  },
  {
    icon: GraduationCap,
    accent: "purple",
    school: "Beprogrammer",
    program: "Web Development with PHP",
    period: "2020 — 2021",
    detail: "Completed the full 108-hour Web with PHP course.",
  },
  {
    icon: Award,
    accent: "blue",
    school: "Al Balqa Applied University",
    program: "B.Sc. Software Engineering",
    period: "2019 — 2024",
    badge: "Teachers' Scholarship Award",
  },
];

const APK_RELEASE_BASE =
  "https://github.com/RafatBSaqqa/NativeKit-Studio-Releases/releases/download/v1.0.1";

const PROJECTS = [
  {
    title: "Plates — Food Delivery",
    description:
      "React Native / Expo food delivery template with live cart, checkout, and order tracking flows — built for NativeKit Studio.",
    tech: ["React Native", "Expo", "TypeScript"],
    demoUrl: "https://plates-app.netlify.app/home",
    apkUrl: `${APK_RELEASE_BASE}/plates.apk`,
  },
  {
    title: "Coinly — Crypto Wallet",
    description:
      "React Native / Expo crypto wallet template with onboarding, portfolio tracking, and transaction UI — built for NativeKit Studio.",
    tech: ["React Native", "Expo", "TypeScript"],
    demoUrl: "https://coinly-app.netlify.app/onboarding",
    apkUrl: `${APK_RELEASE_BASE}/Coinly.apk`,
  },
  {
    title: "Nestly — Real Estate",
    description:
      "React Native / Expo real estate listings template with search, filters, and property detail screens — built for NativeKit Studio.",
    tech: ["React Native", "Expo", "TypeScript"],
    demoUrl: "https://nestly-realestate-app.netlify.app/onboarding",
    apkUrl: `${APK_RELEASE_BASE}/Nestly.apk`,
  },
];

const LANGUAGES = ["Arabic", "English", "German"];

const CONTACT = {
  email: "raafat.saqqa@gmail.com",
  phone: "+971558551075",
  linkedin: "https://www.linkedin.com/in/rafat-saqqa/",
  github: "https://github.com/RafatBSaqqa",
};

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

/** Reveals children with a fade/slide-up animation the first time they scroll into view. */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

function Portfolio() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for whichever section is in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#05060f] text-white overflow-x-hidden selection:bg-blue-500/40">
      {/* Ambient gradient mesh background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:34px_34px]" />
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Nav                                                                */}
      {/* ----------------------------------------------------------------- */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05060f]/80 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-bold text-lg tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 grid place-items-center">
              <Code2 className="w-4 h-4" />
            </span>
            Rafat<span className="text-blue-400">.dev</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Let's talk
          </a>

          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-1 px-6 pt-4 pb-6 bg-[#05060f]/95 border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? "text-white bg-white/10"
                    : "text-gray-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* ----------------------------------------------------------------- */}
      {/* Hero                                                               */}
      {/* ----------------------------------------------------------------- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-6 pt-24"
      >
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            heroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for select projects
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rafat Alsaqqa
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
            Full-Stack Developer &amp; Founder of{" "}
            <span className="text-blue-400 font-semibold">NativeKit Studio</span>
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            MERN / PERN developer building secure, user-centric banking
            software — and shipping premium React Native templates that help
            other developers launch mobile apps in weeks, not months.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo("business")}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold hover:scale-105 transition-transform"
            >
              <Rocket className="w-4 h-4" />
              See NativeKit Studio
            </button>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* subtle scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-xs tracking-widest animate-bounce">
          SCROLL
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Business — NativeKit Studio                                       */}
      {/* ----------------------------------------------------------------- */}
      <section id="business" className="py-24 relative">
        <div className="container mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="What I've built" title="Business" />
          </Reveal>

          <Reveal>
            <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-10 relative overflow-hidden group hover:border-blue-500/40 transition-colors">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl group-hover:bg-purple-500/30 transition-colors" />

              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 grid place-items-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <Smartphone className="w-9 h-9 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">NativeKit Studio</h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-300 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-3 py-1">
                      Founder
                    </span>
                  </div>
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    Premium, production-ready React Native &amp; Expo templates
                    for developers and agencies who want to skip the
                    boilerplate and ship faster. Built and run end-to-end —
                    product, design, engineering, and growth.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React Native", "Expo", "TypeScript", "Stripe", "Templates"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-300"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  <a
                    href="https://nativekitstudio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-[#05060f] px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Visit nativekitstudio.com
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Experience                                                         */}
      {/* ----------------------------------------------------------------- */}
      <section id="experience" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Career" title="Experience" />
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 grid place-items-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-lg font-bold text-blue-400">
                          {exp.title}
                        </h3>
                        <span className="text-xs font-medium text-purple-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-300 font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-300 flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Skills                                                             */}
      {/* ----------------------------------------------------------------- */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Toolbox" title="Technical Skills" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl mx-auto">
            {SKILLS.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 60}>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-200 font-medium text-sm">
                      {skill.name}
                    </span>
                    <span className="text-blue-400 font-bold text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="skill-bar h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ "--skill-level": `${skill.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Projects                                                           */}
      {/* ----------------------------------------------------------------- */}
      <section id="projects" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Selected work" title="Featured Projects" />
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-5">
            {PROJECTS.map((project, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-emerald-500/40 transition-colors">
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium rounded-full border border-emerald-500/30 text-emerald-300 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-200 hover:bg-white/10 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      View Website
                    </a>
                    <a
                      href={project.apkUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/25 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download APK
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Education                                                          */}
      {/* ----------------------------------------------------------------- */}
      <section id="education" className="py-24">
        <div className="container mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Background" title="Education" />
          </Reveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
            {EDUCATION.map((edu, index) => {
              const Icon = edu.icon;
              const accent =
                edu.accent === "purple" ? "text-purple-400" : "text-blue-400";
              return (
                <Reveal key={edu.school} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/25 hover:-translate-y-1 transition-all duration-300">
                    <Icon className={`w-7 h-7 ${accent} mb-4`} />
                    <h3 className={`font-bold mb-1 ${accent}`}>{edu.school}</h3>
                    <p className="text-gray-300 text-sm mb-1">{edu.program}</p>
                    <p className="text-xs text-gray-500 mb-3">{edu.period}</p>
                    {edu.detail && (
                      <p className="text-gray-400 text-sm">{edu.detail}</p>
                    )}
                    {edu.badge && (
                      <span className="inline-block mt-2 text-xs font-semibold bg-yellow-500/15 text-yellow-300 border border-yellow-500/30 rounded-full px-3 py-1">
                        {edu.badge}
                      </span>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="flex justify-center gap-10 mt-16">
              {LANGUAGES.map((lang) => (
                <div key={lang} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 grid place-items-center mb-2 group-hover:scale-110 transition-transform">
                    <Languages className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{lang}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Contact / Footer                                                   */}
      {/* ----------------------------------------------------------------- */}
      <footer
        id="contact"
        className="py-24 bg-white/[0.02] border-t border-white/5"
      >
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's build something
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10">
              Open to select freelance work, collaborations, and conversations
              about React Native templates or fintech products.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </Reveal>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rafat Alsaqqa · Built with React &amp;
            Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
