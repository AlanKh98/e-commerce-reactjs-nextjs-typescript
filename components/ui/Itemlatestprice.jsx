import React, { useState } from "react";
import styles from '../../styles/ui.module.css'
import Button from "./button";
import { useDispatch } from 'react-redux';
import {removeFavItem ,addFavItem} from '../../Cart/cartSlice';


const Cartbtn = (props) =>{
    const [displayHeart,setDisplayHeart] = useState(false);
    const dispatch = useDispatch();

    const adToFavHandler = () =>{
        setDisplayHeart(!displayHeart);
        if(!displayHeart)dispatch(addFavItem(props.id));
        else dispatch(removeFavItem(props.id));
    }

    return(
        <div className={styles.imgItemPrice}>
            <h3 className={styles.productsDetail}>{props.title.length>30?props.title.slice(0,35):props.title}</h3>
            <h3 className={styles.latestPrice}>${props.price}</h3>
            <div className={styles.priceFaivCon}>
              <Button id={props.id}/>
                <div className={styles.svgContain} onClick={() =>adToFavHandler()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className={styles.svgHeartContain} style={{display: displayHeart?'':"none"}}  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default Cartbtn;