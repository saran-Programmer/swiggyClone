import styles from "./DisplayFoodType.module.css"
import { useRef } from "react"
import image1 from "../assets/food/food1.webp"
import image2 from "../assets/food/food2.webp"
import image3 from "../assets/food/food3.webp"
import image4 from "../assets/food/food4.webp"
import image5 from "../assets/food/food5.webp"
import image6 from "../assets/food/food6.webp"
import image7 from "../assets/food/food7.webp"
import image8 from "../assets/food/food8.webp"
import image9 from "../assets/food/food9.webp"
import image10 from "../assets/food/food10.webp"
import image11 from "../assets/food/food11.webp"

const DisplayFoodType = () => {

    const userName = "Saran"
    const scrollable = useRef(null)
    const handleLeftScroll = () => {
        scrollable.current.scrollLeft += 500
    }

    const handleRightScroll = () => {
        scrollable.current.scrollLeft -= 500
    }


    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.text}>
                    <b>{userName}, what's in your mind</b>
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
            <div className={styles.scrollable} ref={scrollable}>
               <img src={image1} alt="briyani" />
               <img src={image2} alt="briyani" />
               <img src={image3} alt="briyani" />
               <img src={image4} alt="briyani" />
               <img src={image5} alt="briyani" />
               <img src={image6} alt="briyani" />
               <img src={image7} alt="briyani" />
               <img src={image8} alt="briyani" />
               <img src={image9} alt="briyani" />
               <img src={image10} alt="briyani" />
               <img src={image11} alt="briyani" />
            </div>
        </div>
    )
}

export default DisplayFoodType