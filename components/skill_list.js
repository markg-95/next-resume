import SkillItem from './skill_item'
import styles from '../styles/layout.module.css'

const SkillList = ({ skills }) => {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </div>
  )
}

export default SkillList


