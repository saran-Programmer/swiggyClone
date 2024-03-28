import styles from "./OfferDisplayer.module.css"
import image1 from "../assets/DiscountImage1.webp"
import image2 from "../assets/DiscountImage2.webp"
import image3 from "../assets/DiscountImage3.webp"
import { useRef } from "react"

const OfferDisplayer = () => {

    const scrollable = useRef(null)

    const handleLeftScroll = () => {
        scrollable.current.scrollLeft += 100
    }

    const handleRightScroll = () => {
        scrollable.current.scrollLeft -= 100
    }

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.text}>
                    <b>Best offers for you</b>
                </span>
                <div className={styles.buttons}>
                <button className={styles.button} onClick={handleRightScroll}>
                    <i class="fa-solid fa-arrow-left" />
                </button>
                <button className={styles.button} onClick={handleLeftScroll}>
                    <i class="fa-solid fa-arrow-right" />
                </button>
                </div>
            </div>
            <div className={styles.images} ref={scrollable}>
                <img src={image1} alt="Discount coupen" />
                <img src={image2} alt="Discount coupen" />
                <img src={image3} alt="Discount coupen" />
                <img src={image2} alt="Discount coupen" />
                <img src={image3} alt="Discount coupen" />
                <img src={image1} alt="Discount coupen" />
                <img src={image2} alt="Discount coupen" />
                <img src={image3} alt="Discount coupen" />
                <img src={image2} alt="Discount coupen" />
                <img src={image3} alt="Discount coupen" />
            </div>
            
        </div>
    )
}

export  default OfferDisplayer