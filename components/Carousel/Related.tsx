import React from "react";
import styles from '../../styles/Home.module.css'
import ItemCarousel from "react-multi-carousel";
import ItemLatest from "../ui/ItemLatest";
import Data from '../../data.json';

type Props = {
  itemType:string;
}
const Caro = (props:Props)=> {
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
      
    return(
      <div className={styles.itemsGroup}>
        <div className={styles.dataContainer}>
          <h1 className={styles.groupTitle}>Related Items</h1>
          <h5>Load more</h5>
        </div>
        <ItemCarousel
          autoPlay={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
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
            Data.filter(it => it.type==props.itemType)
            .map((it,i) => (
              <ItemLatest key={i} id={it.id} title={it.title} price={it.price} src={it.src} alt={it.alt} />
            ))
        }
      </ItemCarousel>
      </div>

    )
}

export default Caro;