import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from '../../styles/Products.module.css'
import LatestItems from '../../components/Carousel/Items'
import RelatedItems from '../../components/Carousel/Related'
import Image from 'next/image'
import Data from '../../data.json';
import { useRouter } from 'next/router';
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../../components/ui/button'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {removeFavItem ,addFavItem} from '../../Cart/cartSlice';


export default function View() {
    const router = useRouter();
    const {id} = router.query; 
    let Item = Data.find((it)=>it.id==id);
    const [displayHeart,setDisplayHeart] = useState(false);
    const dispatch = useDispatch();

    const adToFavHandler = () =>{
        setDisplayHeart(!displayHeart);
        if(!displayHeart)dispatch(addFavItem(id));
        else dispatch(removeFavItem(id as string));
    }

    if(Item)
    return(
        <div className={styles.view}>
            <Header />
            <div className={styles.viewItem}>
                <div className={styles.detailCon}>
                    <h1 className={styles.detailConTitle}>{Item.title}</h1>
                    <p className={styles.detailConPara}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam cupiditate quae ad tempore sunt incidunt! Distinctio dolor dignissimos voluptatibus praesentium pariatur, minus, magni reiciendis eius necessitatibus illo sunt, fuga facilis!</p>
                    <h2 className={styles.detailConDetail}>Brand:<span>GKL</span></h2>
                    <h2 className={styles.detailConDetail}>Product Number:<span>{Item.id}</span></h2>
                    <div className={styles.associate}>
                        <h2>Price: <span>${Item.price}</span></h2>
                        <div className={styles.svgContain} onClick={() =>adToFavHandler()}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className={styles.svgHeartContain} style={{display: displayHeart?'':"none"}}  viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </div>
                        <Button />
                    </div>
                </div>
                <div className={styles.imgViewCon}>
                    <Image
                        className={styles.itemImage}
                        src={'/'+Item.src}
                        alt={Item.alt}
                        loading="eager"
                        width={100}
                        height={100}
                    />
                    {/* <img className={styles.itemImage} src={Item.src} alt={Item.alt} /> */}
                </div>
            </div>
            <RelatedItems itemType={Item.type}/>
            <LatestItems />
            <Footer />
        </div>
    )
    else <div></div>
}
