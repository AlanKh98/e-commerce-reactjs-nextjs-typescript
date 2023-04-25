import React ,{ useEffect, useState} from 'react'
import styles from '../../styles/Products.module.css'
import Footer from '../../components/Footer/Footer'
import Filter from '../../components/Filter/Filter'
import myData from '../../data.json';
import ItemLatest from '../../components/ui/ItemLatest'


interface Order {
    id: string;
    title: string;
    price:number;
    description: string;
    type: string;
    src: string;
    alt: string;
}

export default function Products() {
    const [searchInput, setSearchInput] = useState(String);
    const [cityInput, setInputCity] = useState(String);
    const [data,setData] = useState<Order[]>(myData);

    const toggleState = (title: string,city: string) => {
        setSearchInput(title);
        setInputCity(city);
    }
    useEffect(()=>{
        if(searchInput.length > 0 && cityInput){
            setData(myData.filter((it) => {
                return( 
                    (it.title.toUpperCase().match(searchInput.toUpperCase())
                      &&it.type.match(cityInput))
                    )
            }));
        }
        else if(searchInput.length > 0){
            setData(myData.filter((it) => {
                return it.title.toUpperCase().match(searchInput.toUpperCase())
            }));
        }
        else if(cityInput){
            setData(myData.filter((it) => {
                return it.type.match(cityInput)
            }));
        }
        else setData(myData);
    },[searchInput,cityInput])

    return(
        <div className={styles.products}>
            <Filter toggleState={(search,city) => toggleState(search,city)} />
            <div className={styles.productsView}>
                {
                    data.map((it,i) =>{
                        return<div className={styles.itemContainer} key={i}>
                            <ItemLatest src={it.src} alt={it.alt} title={it.title} price={it.price}/>
                        </div>
                    })
                }
            </div>
            <Footer />
        </div>
    )
}
