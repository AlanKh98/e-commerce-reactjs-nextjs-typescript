import React, { useState } from "react";
import styles from '../../styles/filter.module.css'


type ChildProps = {
    toggleState: (search: string,city: string) => void;

}
const Filter = (props:ChildProps) =>{

    const [searchInput, setSearchInput] = useState(String);
    const [cityInput, setCityInput] = useState(String);
 
    return(
        <div className={styles.filter}>
            <h2 className={styles.logo}><img className={styles.imgLogo} src='/Leave.png' alt='' /></h2>
            <div className={styles.searchInput}>
                <input placeholder="Enter a product name" type="text" onChange={(e) => {setSearchInput(e.target.value);props.toggleState(e.target.value,cityInput);}} />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
            <select className={styles.searchSelect} onChange={e=> {setCityInput(e.target.value);props.toggleState(searchInput,e.target.value)}} id="products">
                <option className="text-xs" value={""}>Product Type</option>
                <option className="text-xs" value={"Cloth"} >Cloth</option>
                <option className="text-xs" value={"Mobile"}>Mobile</option>
                <option className="text-xs" value={"Shoe"}>Shoes</option>
            </select>
        </div>
    )
}

export default Filter;