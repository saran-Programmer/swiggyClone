import styles from "./Footer.module.css"
import image1 from "../assets/FooterImage/app_store.webp"
import image2 from "../assets/FooterImage/play_store.webp"
import { useState } from "react"


const Footer = () => {

    const [showAllCities, setShowAllCities] = useState(false)

    const cities = ["Kolkata",
        "Chennai",
        "Ahmedabad",
        "Chandigarh",
        "Jaipur",
        "Kochi",
        "Coimbatore",
        "Lucknow",
        "Nagpur",
        "Vadodara",
        "Indore",
        "Guwahati",
        "Vizag",
        "Surat",
        "Dehradun",
        "Noida",
        "Ludhiana",
        "Trichy",
        "Vijayawada",
        'Kanpur',
        "Mysore",
        "Nashik",
        "Pondicherry",
        "Agra",
        "Aurangabad",
        "Jalandhar",
        "Kota",
        "Madurai",
        "Allahabad",
        "Manipal",
        "Amritsar",
        "Bareilly",
        "Meerut",
        "Bhopal",
        "Ooty",
        "Bhubaneswar",
        'Raipur',
        "Bikaner",
        "Rajkot",
        "Kozhikode",
        "Central Goa",
        "Sirsa",
        "Gwalior",
        "Thrissur",
        "Kharagpur",
        "Tirupati",
        "Tirupur",
        "Vellore",
        "Thiruvananthapuram",
        "Warangal"]

    const handleToggleShowAllCities = () => {
        if(showAllCities === true){
            setShowAllCities(false)
        }else{
            setShowAllCities(true)
        }
    }

    return(
    <div>
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.text}>For better experience,download the Swiggy app now</div>
                <div className={styles.image}>
                    <img src={image2} alt="Play Store" />
                    <img src={image1} alt="App Store" />
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div>
                    <span className={styles.MainTitle}>Swiggy</span>
                    <span className={styles.body}>
                        © 2023 Bundl Technologies Pvt. Ltd
                    </span>
                </div>
                <div>
                    <span className={styles.Title}>Company</span>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Genie</li>
                    </ul>
                </div>
                <div>
                    <span className={styles.Title}>Contact Us</span>
                    <ul>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                    <span className={styles.Title}>Legal</span>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <span className={styles.Title}>We Deliver To</span>
                    <ul>
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                        <button onClick={handleToggleShowAllCities}>{cities.length} cities   {(showAllCities===true)?<i class="fa-solid fa-angle-up" />:<i class="fa-solid fa-chevron-down" />}</button>
                    </ul>
                </div>
            </div>
            {
                (showAllCities===true)?<div className={styles.showAllCities}>
                    {
                        cities.map(item => (
                            <span>{item}</span>
                        ))
                    }
                </div>:null
            }
            
        </div>
    </div>
    )
}

export default Footer
