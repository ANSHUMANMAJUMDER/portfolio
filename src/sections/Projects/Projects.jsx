import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import incomekaro from '../../assets/incomekaro.webp'
import javascript_project from '../../assets/javascript.jpeg'
import apple_clone from '../../assets/apple.jpeg'
// import funky_bites from '../../assets/funkybites.webp'
import atlas from '../../assets/atlas.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={incomekaro}
          link="https://incomekaro.in/"
          github="https://github.com/ANSHUMANMAJUMDER/loan_app"
          h3="Incomekaro"
          p="Loan Management System"
        />
        <ProjectCard
          src={javascript_project}
          link="https://js-nine-theta.vercel.app/"
          github="https://github.com/ANSHUMANMAJUMDER/js"
          h3="Javascript Projects"
          p="Mini javascript projects"
        />
        <ProjectCard
          src={apple_clone}
          link="https://apple-roan-iota.vercel.app/"
           github="https://github.com/ANSHUMANMAJUMDER/apple"
          h3="Apple Clone"
          p="Clone of Apple website"
        />
        <ProjectCard
          src={atlas}
          link="https://atlas-five-khaki.vercel.app/"
          github="https://github.com/ANSHUMANMAJUMDER/atlas"
          h3="Atlas"
          p="Encyclopedia Website"
        />
      </div>
    </section>
  );
}

export default Projects;