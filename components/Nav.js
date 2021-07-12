import Link from 'next/link'
import styles from '../styles/nav.module.css'

export default function Nav(){
    return (
        <>
            <div className={styles.container}>
                <Link href='/education'><a className={styles.link}>Education</a></Link>
                <Link href='/skills'><a className={styles.link}>Skills</a></Link>
                <Link href='/work_history'><a className={styles.link}>Work History</a></Link>
                <Link href='/cover_letter'><a className={styles.link}>Cover Letter</a></Link>
            </div>
        </>
    )
}