import styles from '../styles/layout.module.css'
import Image from 'next/image'

import ciPhoto from '../public/ci.jpg'

export default function Education() {
    return (
        <>
            <div className={styles.container}>
                <Image src={ciPhoto} alt={'This image could not be loaded.'}/>
                <p>
                    I graduated from CSUCI with a B.S. in Pure Mathematics. My coursework was mostly in
                fundamental branches of mathematics like algebra, analysis, combinatorics, probability and statistics etc.
                    Some course work was more applied in nature, involving algorithm design, scientific computing,
                    statistical analysis with various programming languages, etc. </p>
                <ul>
                    <li>Degree: B.S. Mathematics</li>
                    <li>Emphasis: Pure Mathematics</li>
                    <li>GPA: 3.8+</li>
                    <li>Achievements: Graduated With Honors</li>
                </ul>
            </div>
        </>
    )
}