import ProjectItem from './project_item'
import styles from '../styles/layout.module.css'

const ProjectList = ({ examples }) => {
  return (
    <div className={styles.container}>
      {examples.map((example) => (
        <ProjectItem key={example.id} example={example} />
      ))}
    </div>
  )
}

export default ProjectList


