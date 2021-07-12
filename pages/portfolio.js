import { server } from './../config'
import styles from '../styles/layout.module.css'

import ProjectList from "../components/project_list";

export default function Portfolio({examples}) {
    return (
        <>
            <p>
                Below are projects of mine.
            </p>
            <ProjectList examples={examples}/>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${server}/api/portfolios`)
    const examples = await res.json()
    console.log('props gotten')
    return {
        props: {
            examples
        }
    }
}