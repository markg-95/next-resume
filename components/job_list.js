import JobItem from './job_item'
import styles from '../styles/layout.module.css'

const JobList = ({ jobs }) => {
  return (
    <div className={styles.container}>
      {jobs.map((job) => (
        <JobItem job={job} />
      ))}
    </div>
  )
}

export default JobList


