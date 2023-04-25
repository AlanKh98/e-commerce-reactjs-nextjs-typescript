import Message from '../components/ContactCom/sectionMessage'
import SectionOne from '../components/ContactCom/sectionOne'
import SectionThree from '../components/ContactCom/sectionThree'
import SectionTwo from '../components/ContactCom/sectionTwo'
import Footer from '../components/Footer/Footer'
import styles from '../styles/contact.module.css'

export default function ContactUs() {
    return(
        <div className={styles.contact}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Message />
            <Footer />
        </div>
    )
}
