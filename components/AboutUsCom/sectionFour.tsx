import styles from '../../styles/aboutus.module.css'

export default function SectionFour() {
    return(
        <div className={styles.sectionFour}>
            <h1>Get to Know us</h1>
            <div className={styles.itemsContainer}>
                <div className={styles.something}>
                    <div className={styles.imgContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg"   fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                            <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                        </svg>
                    </div>
                    <h2>QUALITY</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto soluta aspernatur, ullam totam magnam vitae repudiandae esse dolores, qui possimus, iste aut magni tempore optio at sed ipsam. Quas, facere.</p>
                </div>
                <div className={`${styles.something} ${styles.somethingActive}`}>
                    <div className={styles.imgContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg"   fill="currentColor" className="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"/>
                        </svg>
                    </div>
                    <h2>GUARANTEE</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id itaque ex dolore dignissimos! Consectetur, repellat eum fugit earum quaerat beatae numquam inventore quis maxime. Soluta labore voluptate perferendis magnam.</p>
                </div>
                <div className={styles.something}>
                    <div className={styles.imgContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg"   fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                        </svg>
                    </div>
                    <h2>PRICE</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut distinctio eum mollitia quo repellendus error cupiditate natus, tempore incidunt modi pariatur expedita nihil commodi corrupti consectetur necessitatibus possimus est accusamus.</p>
                </div>
                <div className={styles.something}>
                    <div className={styles.imgContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg"   fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </div>
                    <h2>OFFERS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto soluta aspernatur, ullam totam magnam vitae repudiandae esse dolores, qui possimus, iste aut magni tempore optio at sed ipsam. Quas, facere.</p>
                </div>
            </div>
        </div>
    )
}
