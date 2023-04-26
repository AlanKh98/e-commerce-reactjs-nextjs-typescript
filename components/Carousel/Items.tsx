import React from "react";
import styles from '../../styles/Home.module.css'
import ItemCarousel from "react-multi-carousel";
import ItemLatest from "../ui/ItemLatest";

const Caro = ()=> {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

      const LatestCarousel = [
        {id:"100",type:"Mobile",title:'xiaomi X4 pro', price:'240.99',  src:"xiaomi-poco-x4-pro-1.jpg", alt:"item 4"},
        {id:"25", type:"Bag",title:'adidas Originals bumbag in black', price:'255.99',  src:"bag.png" ,alt:"item 5"},
        {id:"1" ,type:"Cloth",title:'JBL Original Jacket', price:'299.99',  src:"jacket.png", alt:"item 6"},
        {id:"30" ,type:"Bag",title:'ASOS DESIGN suede roll top clutch in pink', price:'260.99', src:"bag5.png", alt:"item 8"},
        {id:"101",type:"Mobile",title:'realme pro 10+', price:'220.99',  src:"realme-10-pro-plus-1.jpg", alt:"item 1"},
        {id:"19" ,type:"Shoe",title:'Shoes by Adidas', price:'69.99', src:"shoes1.jpeg", alt:"item 2"}
        ]

    return(
      <div className={styles.itemsGroup}>
        <div className={styles.dataContainer}>
          <h1 className={styles.groupTitle}>Latest additions</h1>
          <h5>Load more</h5>
        </div>
        <ItemCarousel
          autoPlay={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          className={styles.items_Carousel}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
        {
            LatestCarousel.map((it,i) => (
              <ItemLatest key={i} id={it.id} title={it.title} price={it.price} src={it.src} alt={it.alt} />
            ))
        }
      </ItemCarousel>
      </div>

    )
}

export default Caro;