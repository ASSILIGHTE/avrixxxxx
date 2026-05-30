import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Layers3,
  Mail,
  MapPin,

  Menu,
  Monitor,
  Sparkles,
  X,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { profile, projects, skills, timeline } from "./data/portfolio";

const menus = [
  ["Home", "home"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CursorLight() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (event) => {
      if (!ref.current) return;
      ref.current.style.left = `${event.clientX}px`;
      ref.current.style.top = `${event.clientY}px`;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div className="cursor-light" ref={ref} />;
}

function SocialBadge({ label }) {
  return <span className="social-badge">{label}</span>;
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <button className="brand" onClick={() => handleNav("home")}>
          <span>{profile.initials}</span>
          <b>Avrixxx</b>
        </button>

        <nav className={open ? "menu active" : "menu"}>
          {menus.map(([label, id]) => (
            <button key={id} onClick={() => handleNav(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button className="contact-nav" onClick={() => handleNav("contact")}>
          <Mail size={16} />
          Contact
        </button>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-text" data-reveal>
          <div className="status">
            <span></span>
            Available for collaboration
          </div>

          <h1>{profile.headline}</h1>
          <p>{profile.intro}</p>

          <div className="hero-actions">
            <button className="btn primary" onClick={() => scrollToSection("projects")}>
              Lihat Project
              <ArrowUpRight size={18} />
            </button>
            <button className="btn secondary" onClick={() => scrollToSection("contact")}>
              Hubungi Saya
            </button>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
            <span>
              <Code2 size={16} />
              React • Laravel • UI/UX
            </span>
          </div>
        </div>

        <div className="hero-card-wrap" data-reveal>
          <div className="profile-card">
            <div className="card-header">
              <div className="avatar">{profile.initials}</div>
              <div>
                <h2>{profile.name}</h2>
                <p>{profile.role}</p>
              </div>
            </div>

            <div className="role-box">
              <Sparkles size={18} />
              <span>{profile.secondRole}</span>
            </div>

            <div className="code-card">
              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <pre>{`const focus = {
  interface: "clean",
  layout: "responsive",
  system: "structured"
};`}</pre>
            </div>

            <div className="mini-grid">
              <div>
                <strong>12</strong>
                <span>Skills</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>2025</strong>
                <span>Internship</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container marquee">
        <div className="track">
          {[
            "Frontend Development",
            "Responsive UI",
            "React",
            "Laravel",
            "Dashboard",
            "Clean Code",
            "UI/UX",
            "MySQL",
            "Portfolio",
            "Frontend Development",
            "Responsive UI",
            "React",
            "Laravel",
            "Dashboard",
            "Clean Code",
            "UI/UX",
            "MySQL",
            "Portfolio",
          ].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-title" data-reveal>
          <span>Selected Projects</span>
          <h2>Project yang saya kerjakan dengan fokus pada struktur dan tampilan.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title} data-reveal>
              <div className="project-top">
                <span>0{index + 1}</span>
                <small>{project.type}</small>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="stack">
                {project.stack.map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section soft" id="skills">
      <div className="container skills-layout">
        <div className="section-title left" data-reveal>
          <span>Skills</span>
          <h2>Tools dan teknologi yang sering saya pakai.</h2>
          <p>
            Saya menggunakan teknologi yang umum dipakai untuk membangun website,
            sistem informasi, dashboard, dan prototype aplikasi.
          </p>
        </div>

        <div className="skills-grid" data-reveal>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section" id="journey">
      <div className="container journey-layout">
        <div className="section-title left" data-reveal>
          <span>Journey</span>
          <h2>Perjalanan singkat saya.</h2>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline-card" key={`${item.year}-${item.title}`} data-reveal>
              <div className="timeline-icon">
                {index === 0 ? <Code2 /> : index === 1 ? <Monitor /> : index === 2 ? <Briefcase /> : <Layers3 />}
              </div>
              <div>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-card" data-reveal>
        <div>
          <span>Contact</span>
          <h2>Kolaborasi dimulai dari Discord.</h2>
          <p>Silakan hubungi saya hanya melalui Discord.</p>
        </div>

        <div className="contact-links">
          <a
            className="btn primary full"
            href={profile.discord}
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={18} />
            Chat di Discord
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <p>© {new Date().getFullYear()} {profile.name}..</p>
        <button onClick={() => scrollToSection("home")}>Back to top</button>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();

  return (
    <>
      <CursorLight />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
