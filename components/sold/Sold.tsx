import styles from '../../styles/Sold.module.css'

function sold() {
    return(
        <div className={styles.sold}>
            <div className={styles.left}>
                <img src='Social Media Post.jpeg' />
            </div>
            <div className={styles.right}>
                <div className={styles.top}>
                    <div>
                        <h2>GET YOUR KICKS</h2>
                        <h2>NIKE SHOES</h2>
                        <h1 >$199.99</h1>
                    </div>
                    <img src='shoe.png' />
                </div>
                <div className={styles.bottom}>
                    <div className={styles.itemLeft}>
                        <div>
                            <h5 className={styles.priceRed}>$390.00</h5>
                            <h5 className={styles.priceGreen}>$199.99</h5>
                        </div>
                        <h5>Adidas Sneakers</h5>
                        <img className={styles.snikers} src='white.png' />
                    </div>
                    <div className={styles.itemRight}>
                        <div>
                            <h5 className={styles.priceRed}>$390.00</h5>
                            <h5 className={styles.priceGreen}>$199.99</h5>
                        </div>
                        <h5>Adidas Sneakers</h5>
                        <img src='black.png' className={styles.snikers}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default sold;