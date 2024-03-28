import styles from "./DisplayFoodContainer.module.css"

import image1 from "../assets/dish/dish1.webp"
import image2 from "../assets/dish/dish2.webp"
import image3 from "../assets/dish/dish3.webp"
import image4 from "../assets/dish/dish4.webp"
import image5 from "../assets/dish/dish5.webp"
import image6 from "../assets/dish/dish6.webp"
import image7 from "../assets/dish/dish7.webp"
import image8 from "../assets/dish/dish8.webp"
import image9 from "../assets/dish/dish9.webp"
import image10 from "../assets/dish/dish10.webp"
import image11 from "../assets/dish/dish11.webp"
import image12 from "../assets/dish/dish12.webp"
import image13 from "../assets/dish/dish13.webp"
import image14 from "../assets/dish/dish14.webp"
import image15 from "../assets/dish/dish15.webp"
import image16 from "../assets/dish/dish16.webp"
import image17 from "../assets/dish/dish17.webp"
import image18 from "../assets/dish/dish18.webp"
import image19 from "../assets/dish/dish19.webp"
import image20 from "../assets/dish/dish20.webp"
import DisplayFood from "./DisplayFood"


const DisplayFoodContainer = () => {

    const ItemsArray = [{image: image1, Title: "Burger King", address: "Rs Puram", noStars: 4, isFreeDelivery: true, offerDetails: "Offer Upto 20%"},
    {image: image2, Title: "Salad palace", address: "katu kuppam", noStars: 3.6, isFreeDelivery: false, offerDetails: "Buy One get One Free"},
    {image: image3, Title: "Sree Annaporna", address: "Ediarpalyam", noStars: 3.9, isFreeDelivery: true, offerDetails: ""},
    {image: image4, Title: "A1 Chettinadu", address: "Kovai pudur", noStars: 2.1, isFreeDelivery: false, offerDetails: ""},
    {image: image5, Title: "Poori House", address: "peelamedu", noStars: 3.2, isFreeDelivery: true, offerDetails: ""},
    {image: image6, Title: "Meal Center", address: "Gandhipuram", noStars: 4, isFreeDelivery: true, offerDetails: "₹100 offer upto ₹399"},
    {image: image7, Title: "Tiffen Center", address: "kovai pudur", noStars: 2.1, isFreeDelivery: true, offerDetails: ""},
    {image: image8, Title: "South Indian Meals", address: "Kuniyamuthur", noStars: 4.1, isFreeDelivery: false, offerDetails: ""},
    {image: image9, Title: "Cake Bee", address: "Rs Puram", noStars: 1.6, isFreeDelivery: true, offerDetails: ""},
    {image: image10, Title: "Coffee House", address: "Rs Puram", noStars: 3.7, isFreeDelivery: true, offerDetails: ""},
    {image: image11, Title: "Anandhas", address: "Coimbatore", noStars: 2.8, isFreeDelivery: true, offerDetails: ""},
    {image: image12, Title: "007 Dabha", address: "sundapuram", noStars: 1.4, isFreeDelivery: true, offerDetails: ""},
    {image: image13, Title: "Palani Hotel", address: "Mile Stone", noStars: 3, isFreeDelivery: true, offerDetails: "Free Slaps from chef"},
    {image: image14, Title: "Morning shop", address: "Rs Puram", noStars: 2.9, isFreeDelivery: false, offerDetails: ""},
    {image: image15, Title: "Thalapakatti Briyani", address: "Rs Puram", noStars: 4.2, isFreeDelivery: false, offerDetails: ""},
    {image: image16, Title: "Cake Point", address: "Puducherry", noStars: 4.3, isFreeDelivery: false, offerDetails: "Black Forest cake"},
    {image: image17, Title: "Red Box", address: "Nehru Street", noStars: 3.9, isFreeDelivery: true, offerDetails: ""},
    {image: image18, Title: "Pizza Hut", address: "Rs Puram", noStars: 3.2, isFreeDelivery: true, offerDetails: ""},
    {image: image19, Title: "HMR", address: "Ediyapalayam", noStars: 4.6, isFreeDelivery: false, offerDetails: ""},
    {image: image20, Title: "Murugan Hotels", address: "Bussy Street", noStars: 2.9, isFreeDelivery: true, offerDetails: ""}]

    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                {
                    ItemsArray.map(item => (
                        <DisplayFood 
                        image={item.image}
                        title={item.Title}
                        address={item.address}
                        rating={item.noStars}
                        isFreeDelivery={item.isFreeDelivery}
                        offer={item.offerDetails}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayFoodContainer