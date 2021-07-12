import { server } from './../config'
import styles from '../styles/layout.module.css'

import SkillList from "../components/skill_list";

export default function Education({skills}) {
    return (
        <>
            <p>
                Below are skills I posses related to full stack development.
            </p>
            <SkillList skills={skills}/>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${server}/api/skills`)
    const skills = await res.json()
    console.log('props gotten')
    return {
        props: {
            skills
        }
    }
}