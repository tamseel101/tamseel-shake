import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/aibot.png';
import hipsster from '../../assets/codenext.png';
import fitLift from '../../assets/closetsort.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle}>Featured Projects</h2>
          <p className={styles.projectsSubtitle}>
            A showcase of my latest work and contributions to innovative solutions
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          <ProjectCard
            src={hipsster}
            link="https://github.com/tamseel101/CodeNext"
            h3="CodeNext"
            p="CodeNext customizes your Leetcode plan, schedules daily tasks, tracks progress, and sends reminders for efficient interview prep."
            detailsLink="https://github.com/tamseel101/CodeNext"
            githubLink="https://github.com/tamseel101/CodeNext"
          />
          
          <ProjectCard
            src={fitLift}
            link="https://docs.google.com/presentation/d/1OWTu-lkhMzbbb-YCD7BUtreimhKw2wuF3gVKmG850kw/edit?usp=sharing"
            h3="ClosetSort()"
            p="ClosetSort is a smart wardrobe management app designed to simplify outfit planning and promote sustainable fashion habits. The high-fidelity prototype showcases an intuitive interface where users can scan or upload images of their clothing to build a digital closet. The app automatically categorizes wardrobe items and uses AI to suggest outfit combinations tailored to weather, occasion, and personal style."
            detailsLink="https://docs.google.com/presentation/d/1OWTu-lkhMzbbb-YCD7BUtreimhKw2wuF3gVKmG850kw/edit?usp=sharing"
            githubLink="https://github.com/tamseel101/TOHacks-2021"
          />
          
          <ProjectCard
            src={viberr}
            link="https://github.com/tamseel101/interviewer_bot"
            h3="Interviewer Bot"
            p="Powered by OpenAI and the Web Speech API, the Recruiter Bot conducts interviews by asking questions and providing recommended answers."
            detailsLink="https://github.com/tamseel101/interviewer_bot"
            githubLink="https://github.com/tamseel101/interviewer_bot"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
