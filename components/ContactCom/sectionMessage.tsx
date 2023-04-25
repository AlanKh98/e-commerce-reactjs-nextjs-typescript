import styles from '../../styles/contact.module.css'

export default function Message() {
    return(
        <div className={styles.sendMessageContainer}>
        <h2>IF GOT ANY QUESTIONS</h2>
        <h2>PLEASE DO NOT HESITATE TO SEND US A MESSAGE</h2>
        <div className={styles.textInCon}>
            <input type='text' placeholder='Your Name' />
            <input type='text' placeholder='Your Email' />
            <input type='text' placeholder='Subject' />
            <textarea placeholder='YOUR MESSAGE' />
        </div>
        <button className={styles.sendMessagebtn}>SEND MESSAGE</button>
        <h3>Connect with us !</h3>
    </div>
    )
}
