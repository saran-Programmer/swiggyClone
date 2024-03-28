import styles from "./DisplayRestaurant.module.css"
import { useRef } from "react"
import image1 from "../assets/restaurant/res1.webp"
import image2 from "../assets/restaurant/res2.webp"
import image3 from "../assets/restaurant/res3.webp"
import image4 from "../assets/restaurant/res4.webp"
import image6 from "../assets/restaurant/res6.webp"
import image7 from "../assets/restaurant/res7.webp"
import image8 from "../assets/restaurant/res8.webp"
import image9 from "../assets/restaurant/res9.webp"
import image10 from "../assets/restaurant/res10.webp"
import DisplayRestaurantDetails from "./DisplayRestaurantDetails"

const DisplayRestaurant = () => {

    const userLocation = "Coimbatore"
    const scrollable = useRef(null)
    const scrollBar = useRef(null)
    var currentProgressBarStatus = 0
    const restaurentImages = [{name:image1, Title: "BurgerKing", noStars: 4, address:"R S puram", foodType:"American burgers", offerDetails: "60% offer upto ₹120"},
    {name:image2, Title: "Dominose Pizza", noStars: 4, address:"Pelamedu", foodType:"Itallian Pizzas", offerDetails: "Buy one get one free"},
    {name:image3, Title: "A2B", noStars: 2, address:"R S puram", foodType:"South Indian", offerDetails: ""},
    {name:image4, Title: "Pizza Hut", noStars: 3.6, address:"Ganapathi", foodType:"American Pizzas", offerDetails: ""},
    {name:image6, Title: "Kokara ko", noStars: 4.1, address:"B K Pudhur", foodType:"Indian cusine", offerDetails: ""},
    {name:image7, Title: "Mc Donals", noStars: 3.6, address:"Gandhipuram", foodType:"American burgers", offerDetails: "Get Free Dips"},
    {name:image8, Title: "Smoodies", noStars: 2, address:"Ukkadam", foodType:"Milk shakes and Ice creams"},
    {name:image9, Title: "Baskin Robbins", noStars: 5, address:"Savanampatti", foodType:"31 Flavour Ice Creams", offerDetails: "Get Ice cream stick free"},
    {name:image10, Title: "Annapoorna", noStars: 3.7, address:"Rs puram", foodType:"South Indian Dishes", offerDetails: ""}
]
    const handleLeftScroll = () => {
        scrollable.current.scrollLeft += 500
        if(currentProgressBarStatus  < 55 && currentProgressBarStatus >= 0){
            currentProgressBarStatus += 15
            console.log(currentProgressBarStatus)
            scrollBar.current.style.marginLeft = `${currentProgressBarStatus}px`
        }
        
    }

    const handleRightScroll = () => {
        scrollable.current.scrollLeft -= 500
        if(currentProgressBarStatus  <= 65 && currentProgressBarStatus > 0){
            currentProgressBarStatus -= 15
            console.log(currentProgressBarStatus)
            scrollBar.current.style.marginLeft = `${currentProgressBarStatus}px`
        }
        
    }
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.text}>Top restaurant chains in {userLocation}</span>
                <div className={styles.buttons}>
                <button className={styles.button} onClick={handleRightScroll}>
                    <i class="fa-solid fa-arrow-left" />
                </button>
                <button className={styles.button} onClick={handleLeftScroll}>
                    <i class="fa-solid fa-arrow-right" />
                </button>
                </div>
            </div>
            <div className={styles.scrollAble} ref={scrollable}>
                {
                    restaurentImages.map(item => (
                        <DisplayRestaurantDetails 
                            Title={item.Title}
                            image={item.name}
                            rating={item.noStars}
                            Type={item.foodType}
                            Location={item.address}
                            offerDetails={item.offerDetails}
                        />
                    ))
                }
            </div>
            <div className={styles.scrollBarContainer}>
                <div className={styles.scrollBar} />
                <div className={styles.progress} ref={scrollBar}/>
            </div>
        </div>
    )
}

export default DisplayRestaurant