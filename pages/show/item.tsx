import styles from '../../styles/show.module.css'
import { useDispatch } from 'react-redux';
import {removeFavItem ,addFavItem} from '../../Cart/cartSlice';
import Image from 'next/image'




interface data{
    id:string,
    title:string,
    description:string|undefined,
    type?:string|undefined,
    src:string,
    alt:string,
    price:number,
  }

export default function itemShow({id,src,title,description,price}:data) {
    const dispatch = useDispatch();
    return(
        <div className={styles.CartItemCon}>
            <img className={styles.cartItemImgCon} src={'/'+src} alt='' />
            <div className={styles.cartItemDetailCon}>
                <h2>{title}</h2>
                <p>{description}</p>
                <h2>{price}</h2>
            </div>
            <div className={styles.itemRemove} onClick={()=>dispatch(removeFavItem(id))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                <h5>remove</h5>
            </div>
        </div>
    )
}
