import SectionFour from '../components/AboutUsCom/sectionFour'
import SectionOne from '../components/AboutUsCom/sectionOne'
import SectionTwo from '../components/AboutUsCom/sectionTwo'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from '../styles/aboutus.module.css'

export default function About() {
    return(
        <div className={styles.about}>
            <Header />
            <SectionOne />
            <img className={styles.imgAbout} src='Communication.jpeg' alt='' />
            <SectionFour />
            <SectionTwo />
            <Footer />
            {/* <SectionThree /> */}
        </div>
    )
}
