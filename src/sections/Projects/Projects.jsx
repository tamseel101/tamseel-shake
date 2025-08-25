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
            p="Learning. Networking. Growing. You can do all of these at once on Baobab, a educational social media site built for entrepreneurs. We wrote a full stack web application with a built in educational system, including assignment deliverables, real-time discussion boards, and user profiles to encourage networking. I worked as a full stack developer and founder, writing front-end and back-end code, and communicating with the product team to ensure the platform matched what our client wanted. Click the icon to check out our repo!"
            detailsLink="https://github.com/tamseel101/CodeNext"
            githubLink="https://github.com/tamseel101/CodeNext"
          />
          
          <ProjectCard
            src={fitLift}
            link="https://docs.google.com/presentation/d/1OWTu-lkhMzbbb-YCD7BUtreimhKw2wuF3gVKmG850kw/edit?usp=sharing"
            h3="ClosetSort()"
            p="Learning shouldn't be confined by borders. We utilized blockchain technology to create our own cryptocurrency that can be used by students and tutors on our very own e-learning platform, which was created as a project for TOHacks 2021! I coded the cryptocurrency, and used chakra-ui to create a responsive and dynamic site. Click the image to check out our devpost page!"
            detailsLink="https://docs.google.com/presentation/d/1OWTu-lkhMzbbb-YCD7BUtreimhKw2wuF3gVKmG850kw/edit?usp=sharing"
            githubLink="https://github.com/tamseel101/TOHacks-2021"
          />
          
          <ProjectCard
            src={viberr}
            link="https://github.com/tamseel101/interviewer_bot"
            h3="Interviewer Bot"
            p="TLDR: Ontario's covid reponse app was so bad, even a group of kids competing in UTM's Hack The Case Hackathon/Case Competition hybrid could write a better one in three days. We used Next.js for the front end, and firebase for the back end. My focus was on the front end and presentation. We ended up taking home first place! Click the image to check out our devpost page!"
            detailsLink="https://github.com/tamseel101/interviewer_bot"
            githubLink="https://github.com/tamseel101/interviewer_bot"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
