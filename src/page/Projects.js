import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import projectVideo from '../assets/project_video.mp4';

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>Our Impactful Projects</h1>
        <p>Together, we are building a better tomorrow for every child, every woman, every family.</p>
      </header>

      <section className="project-section">
        <div className="project-card">
          <img src={project1} alt="Project 1" />
          <div className="project-info">
            <h2>Empowering Education</h2>
            <p>At Vanshu Foundation, we believe education is the most powerful tool for change.
We provide underprivileged children with access to quality learning and digital resources.
Through our community programs and volunteer-driven classes, we nurture young minds.
Our mission is to build a future where every child has the right to dream and achieve.</p>
          </div>
        </div>

        <div className="project-card">
          <img src={project2} alt="Project 2" />
          <div className="project-info">
            <h2>Women Skill Training</h2>
            <p>We are committed to uplifting women through skill development and vocational training.
From tailoring and computer literacy to entrepreneurship, we help them become self-reliant.
Our training centers offer safe spaces where women learn, grow, and support each other.
Empowered women create empowered communities — and that's the change we strive for.</p>
          </div>
        </div>

        <div className="project-video-card">
          <h2>See the Impact</h2>
          <video controls>
            <source src={projectVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Projects;
