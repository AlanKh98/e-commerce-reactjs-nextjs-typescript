import styles from '../../styles/contact.module.css'

export default function SectionThree() {
    return(
        <div className={styles.howToCon}>
            <div className={styles.leftSec}>
                <h2>How To Contact</h2>
                <p className={styles.subText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quae dolorem ipsa minus iste quaerat aperiam ducimus autem, facilis ullam praesentium molestiae similique at eius atque est nulla sequi? amet consectetur adipisicing elit. Nesciunt impedit aliquam est magnam, culpa illo dolores corrupti architecto sequi velit atque dolorem maiores earum mollitia,</p>
                <p className={styles.mainText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt impedit aliquam est magnam, culpa illo dolores corrupti architecto sequi velit atque dolorem maiores earum mollitia, odio iure odit aliquid eaque. Vitae id quae dolorem ipsa minus iste quaerat aperiam ducimus autem, facilis ullam praesentium molestiae similique at eius atque est nulla sequi? amet consectetur adipisicing elit. Nesciunt impedit aliquam est magnam, culpa illo dolores corrupti architecto sequi velit atque dolorem maiores earum mollitia,</p>
            </div>
            <div className={styles.rightSec}>
                <img src='contactwithus.png' alt='Contact'/>
            </div>
        </div>
    )
}
