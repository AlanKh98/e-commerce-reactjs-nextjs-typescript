import styles from '../../styles/aboutus.module.css'

export default function SectionTwo() {
    return(
        <div className={styles.sectionTwo}>
            <div className={styles.leftTwo}>
                <h1>,,</h1>
                <p>Our work does only if it is a faithful witness of his time</p>
                <h6>Alan Khalil Web Developer</h6>
                <h1 className={styles.endTag}>,,</h1>
            </div>
            <div className={styles.rightTwo}>
                <img src='Online.png' alt='Online' />
            </div>
        </div>
    )
}
