import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/aibot.png';
import hipsster from '../../assets/codenext.png';
import fitLift from '../../assets/closetsort.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCard
          src={hipsster}
          link="https://github.com/tamseel101/CodeNext"
          h3="CodeNext"
          p="React, Django, SQL"
        />
        <ProjectCard
          src={fitLift}
          link="https://docs.google.com/presentation/d/1OWTu-lkhMzbbb-YCD7BUtreimhKw2wuF3gVKmG850kw/edit?usp=sharing"
          h3="ClosetSort()"
          p="UX/ UI"
        />
          <ProjectCard
          src={viberr}
          link="https://github.com/tamseel101/interviewer_bot"
          h3="Interviewer Bot"
          p="React, JS, OpenAI"
        />

      </div>
    </section>
  );
}

export default Projects;
