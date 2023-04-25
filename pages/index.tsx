import ItemCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import Itemimg from "../components/ui/Itemimg";
import LatestItems from '../components/Carousel/Items'
import Sold from '../components/sold/Sold'
import Footer from "../components/Footer/Footer";
import ItemLatest from '../components/ui/ItemLatest'
import AddToCart from '../components/ui/addToCart'
export default function Home() {
  interface CaroDataProps{
    src: string,
    alt: string,
    title: string,
    old: string,
    new: string
  }
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

  const carouselImage = [
    {
      src:'b1.png',
      alt:'Item 1',
    },
    {
      src:'b3.png',
      alt:'Item 2',
    },
    {
      src:'b2.png',
      alt:'Item 3',
    },
    {
      src:'b4.jpeg',
      alt:'Item 4',
    },
  ]
  return (
    <div className={styles.container}>
      <Header />
      <Carousel
        autoPlay={true}
        infiniteLoop
        swipeable={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        className={styles.Caarousel}
      >
        {
          carouselImage.map((it,i)=>{
          return<div key={i}>
                  <img src={it.src} alt={it.alt} />
                </div>
          })
        }
      </Carousel>

    <Sold />
    <LatestItems />

      <div className={styles.itemsGroup}>
        <div className={styles.dataContainer}>
          <h1 className={styles.groupTitle}>Trending Products</h1>
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
          arrows={false}
          customTransition="all .5"
          transitionDuration={500}
          className={styles.items_Carousel}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <Itemimg title='xiaomi X4 pro' type="Mobile" old='240.99' new='198.99' src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-x4-pro-1.jpg" alt="item 4" />
          <Itemimg title='xiaomi Note 11 pro' type="Mobile" old='240.99' new='198.99' src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-11-pro-global-0.jpg" alt="item 5" />
          <Itemimg title='xiaomi Poco f1' type="Mobile" old='240.99' new='198.99' src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-pocophone-f1-2.jpg" alt="item 6" />
          <Itemimg title='xiaomi mi 11 lite'type="Mobile"  old='240.99' new='198.99' src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-11-lite-4g-1.jpg" alt="item 8" />
          <Itemimg title='realme pro 10+' old='240.99' type="Mobile" new='198.99' src="https://fdn2.gsmarena.com/vv/pics/realme/realme-10-pro-plus-1.jpg" alt="item 1" />
          <Itemimg title='xiaomi X3 pro' old='240.99' type="Mobile" new='198.99' src="https://fdn.gsmarena.com/imgroot/reviews/21/poco-x3-pro/lifestyle/-1200w5/gsmarena_001.jpg" alt="item 2" />

        </ItemCarousel>
      </div>

      <div className={styles.itemsGroup}>
        <div className={styles.dataContainer}>
          <h1 className={styles.groupTitle}>jackets</h1>
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
          arrows={false}
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
          <ItemLatest id="1" type="Cloth" title='The North Face Nuptse cropped down jacket' price='240.99'  src="jacket.png" alt="item 4" />
          <ItemLatest id="2" type="Cloth" title='Fila onion quilted puffer jacket with logo' price='240.99'  src="jacket1.png" alt="item 5" />
          <ItemLatest id="3" type="Cloth" title='The North Face Gosei lightweight puffer jacket' price='240.99'  src="jacket2.png" alt="item 6" />
          <ItemLatest id="4" type="Cloth" title='Barney Originals Clara real leather jacket' price='240.99'  src="jacket3.png" alt="item 8" />
          <ItemLatest id="5" type="Cloth" title='Barbour International Polarquilt classic jacket' price='240.99'  src="jacket4.png" alt="item 1" />
          <ItemLatest id="6" type="Cloth" title='adidas Originals slim trefoil puffer jacket in black' price='240.99'  src="jacket5.png" alt="item 2" />

        </ItemCarousel>
      </div>
      <div className={styles.itemsGroup}>
        <div className={styles.dataContainer}>
          <h1 className={styles.groupTitle}>shirts</h1>
          <h5>Load more</h5>
        </div>

        <ItemCarousel
          autoPlay={true}
          swipeable={false}
          draggable={false}
          arrows={false}
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
          <ItemLatest id="7"  type="Shirt" title='Topshop cotton casual shirt in ivory' price='240.99' src="shirt.jpeg" alt="item 4" />
          <ItemLatest id="8"  type="Shirt" title='Urban Revivo relaxed shirt' price='240.99' src="shirt1.png" alt="item 5" />
          <ItemLatest id="9"  type="Shirt" title='ASOS DESIGN oversized shirt in black dobby' price='240.99' src="shirt2.jpeg" alt="item 6" />
          <ItemLatest id="10" type="Shirt" title='River Island peplum satin top in pink' price='240.99' src="shirt3.jpeg" alt="item 8" />
          <ItemLatest id="11" type="Shirt" title='Only cheesecloth button down shirt co-ord in beige' price='240.99' src="shirt4.jpeg" alt="item 1" />
          <ItemLatest id="12" type="Shirt" title='COLLUSION Y2K wrap shirt in light blue' price='240.99' src="shirt5.jpeg" alt="item 2" />
          <ItemLatest id="13" type="Shirt" title='River Island twist front shirt in orange' price='240.99' src="shirt6.jpeg" alt="item 6" />
          <ItemLatest id="14" type="Shirt" title='River Island paisley ruffle blouse in pink' price='240.99' src="shirt7.jpeg" alt="item 8" />
          <ItemLatest id="15" type="Shirt" title='River Island Plus tile print kimono top in blue' price='240.99' src="shirt8.jpeg" alt="item 1" />
          <ItemLatest id="16" type="Shirt" title='New Look lettuce edge t-shirt in white' price='240.99' src="shirt9.jpeg" alt="item 2" />
          <ItemLatest id="17" type="Shirt" title='Topshop cotton casual shirt' price='240.99' src="shirt10.jpeg" alt="item 2" />

        </ItemCarousel>
      </div>
      <div className={styles.itemsGroup}>
        <div className={styles.dataContainer}>
          <h1 className={styles.groupTitle}>Shoes</h1>
          <h5>Load more</h5>
        </div>

        <ItemCarousel
          autoPlay={true}
          arrows={false}
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
          <ItemLatest id="18" type="Shoe" title='adidas Originals Campus trainers in off white' price='89.99' src="shoes.jpeg" alt="item 4" />
          <ItemLatest id="19" type="Shoe" title='adidas Originals Ozweego trainers in beige' price='69.99' src="shoes1.jpeg" alt="item 5" />
          <ItemLatest id="20" type="Shoe" title='HUGO Kilian Tenn Pume trainers in white and green' price='39.99' src="shoes2.jpeg" alt="item 6" />
          <ItemLatest id="21" type="Shoe" title='Asics Running Gel-Kayano 29 trainers in deep purple and navy' price='25.99' src="shoes3.jpeg" alt="item 8" />
          <ItemLatest id="22" type="Shoe" title='adidas Originals Forum Bold trainers' price='20.99' src="shoes4.jpeg" alt="item 1" />
          <ItemLatest id="23" type="Shoe" title='ASOS DESIGN Mingle chain loafers in tan' price='40.99' src="shoes5.jpg" alt="item 2" />
          <ItemLatest id="24" type="Shoe" title='Topshop Nancy strappy toe post mid heeled sandal in silver croc' price='19.99' src="shoes6.jpg" alt="item 6" />

        </ItemCarousel>
      </div>
      <div className={styles.itemsGroup}>
        <div className={styles.dataContainer}>
          <h1 className={styles.groupTitle}>bags</h1>
          <h5>Load more</h5>
        </div>

        <ItemCarousel
          autoPlay={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
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
          <ItemLatest id="25" type="Bag" title='adidas Originals bumbag in black' price='99.99'  src="bag.png" alt="item 4" />
          <ItemLatest id="26" type="Bag" title='ASOS DESIGN clutch with 3D flowers in pink' price='55.99'  src="bag1.png" alt="item 5" />
          <ItemLatest id="27" type="Bag" title='River Island embossed croc satchel in white' price='40.99'  src="bag2.png" alt="item 6" />
          <ItemLatest id="28" type="Bag" title='ASOS DESIGN suede roll top clutch in pink' price='45.99'  src="bag3.png" alt="item 8" />
          <ItemLatest id="29" type="Bag" title='ASOS DESIGN easy tote in black' price='74.99'  src="bag4.png" alt="item 1" />
          <ItemLatest id="30" type="Bag" title='Topshop Jordan fringe canvas bag in cream' price='25.99'  src="bag5.png" alt="item 2" />

        </ItemCarousel>
      </div>
      <AddToCart />
      <Footer />
    </div>
  );
}
