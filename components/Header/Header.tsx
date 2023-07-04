import styles from '../../styles/Skills.module.css'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


function header() {
    const router = useRouter();
    const items = useSelector((store:any) => store.cart.favItems.length);
    const cartItems = useSelector((store:any) => store.cart.cartItems.length);
    return(
        <div className={styles.header}>
            <div className={styles.logo}><img className={styles.imgLogo} src='leave.png' alt='' /></div>
            <div className={styles.items}>
                <div className={styles.pages}>
                    <ul>
                        <li className={`${styles.headerPages} ${styles.headerPagesActive}`} onClick={() => router.push('/')}>Home</li>
                        <li className={styles.headerPagesList} >
                            <a onClick={() => router.push('/Products')}>Shop</a> 
                            <svg xmlns="http://www.w3.org/2000/svg"     height="24" width="24" className={styles.shop} fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <div className={styles.listComponents}>
                                <div>
                                    <h5>Common Categories</h5>
                                    <ul>
                                        <li>Men's Shoes</li>
                                        <li>Sneakers</li>
                                        <li>Women's Watches</li>
                                        <li>Women's Shoes</li>
                                        <li>Sneakers</li>
                                        <li>Men's Watches</li>
                                        <li>Skin Care</li>
                                        <li>Smart Watch</li>
                                        <li>Heeld Sandals</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Brands</h5>
                                    <ul>
                                        <li>Xiaomi</li>
                                        <li>Samsung</li>
                                        <li>Oppo</li>
                                        <li>Realme</li>
                                        <li>Apple</li>
                                        <li>Infinix</li>
                                        <li>Nokia</li>
                                        <li>Xiaomi</li>
                                        <li>Samsung</li>
                                        <li>Oppo</li>
                                        <li>Realme</li>
                                        <li>Apple</li>
                                        <li>Infinix</li>
                                        <li>Nokia</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5>Common Products</h5>
                                    <ul>
                                        <li>Watches</li>
                                        <li>Clothes</li>
                                        <li>Sunglasses</li>
                                        <li>Smartphones</li>
                                        <li>Laptops</li>
                                        <li>Games</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className={styles.headerPages} onClick={() => router.push('/contact')}>Contact</li>
                        <li className={styles.headerPages} onClick={() => router.push('/aboutus')}>AboutUs</li>
                    </ul>
                </div>
                <div className={styles.icons}>
                    <div className={styles.iconsItem} onClick={() => router.push({
                        pathname: '/show',
                        query: {
                        type:'Fav'
                        }
                    })}>
                        <svg xmlns="http://www.w3.org/2000/svg"     height="24"     width="24" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                        <p style={{display:items>0?"":'none'}}>{items}</p>
                    </div>
                    <div className={styles.iconsItem} onClick={() => router.push({
                        pathname: '/show',
                        query: {
                        type:'cart'
                        }
                    })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                        <p style={{display:cartItems>0?"":'none'}}>{cartItems}</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default header;