import styles from '../styles/Home.module.css'
import Image from 'next/image'

import ciPhoto from '../public/ci.jpg'

import JobList from "../components/job_list";
import {server} from "../config";

export default function WorkHistory({jobs}) {
    return (
        <>
            <div>
                <h1>Work History</h1>
                <JobList jobs={jobs}/>
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${server}/api/jobs`)
    const jobs = await res.json()
    console.log('props gotten')
    return {
        props: {
            jobs
        }
    }
}