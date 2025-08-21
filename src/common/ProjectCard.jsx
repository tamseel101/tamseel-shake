import styles from '../sections/Projects/ProjectsStyles.module.css';

// eslint-disable-next-line react/prop-types
function ProjectCard({ src, link, h3, p, detailsLink, githubLink }) {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectLeft}>
        <a href={link} target="_blank" rel="noreferrer" className={styles.projectImageLink}>
          <img src={src} alt={`${h3} logo`} className={styles.projectImage} />
        </a>
        <h3 className={styles.projectTitle}>{h3}</h3>
      </div>
      <div className={styles.projectRight}>
        <p className={styles.projectDescription}>{p}</p>
        <div className={styles.projectButtons}>
          <a href={detailsLink} target="_blank" rel="noreferrer">
            <button className="hover">View Details</button>
          </a>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <button className="hover">GitHub</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
