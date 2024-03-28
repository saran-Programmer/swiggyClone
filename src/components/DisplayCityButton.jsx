import styles from "./DisplayRecommendation.module.css"

const Cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Surat",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara"
];

const DisplayCityButton = () => {
    return(
        <div className={styles.container}>
            <span className={styles.text}>Best Place To Eat Accross Cities</span>
            <div className={styles.buttonContainer}>
            {
                Cities.map(item => (
                    <button>Best Restaurents in {item}</button>
                ))
            }
            </div>
        </div>
    )
}

export default DisplayCityButton