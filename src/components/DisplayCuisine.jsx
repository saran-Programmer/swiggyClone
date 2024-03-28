import styles from "./DisplayRecommendation.module.css"

const DisplayCuisine = () => {

    const famousCuisines = [
        "Italian Cuisine",
        "Chinese Cuisine",
        "Indian Cuisine",
        "Japanese Cuisine",
        "French Cuisine",
        "Mexican Cuisine",
        "Mediterranean Cuisine",
        "Thai Cuisine",
        "Greek Cuisine",
        "Spanish Cuisine",
        "Middle Eastern Cuisine",
        "Korean Cuisine",
        "Vietnamese Cuisine",
        "Cajun Cuisine",
        "Brazilian Cuisine",
        "Tex-Mex Cuisine",
        "Russian Cuisine",
        "Turkish Cuisine",
        "Caribbean Cuisine",
        "Peruvian Cuisine",
    ];

    return(
        <div className={styles.container}>
            <span className={styles.text}>Best Cuisines Near Me</span>
        <div className={styles.buttonContainer}>
            {
                famousCuisines.map(item => (
                    <button>Best Restaurents in {item}</button>
                ))
            }
        </div>
        </div>
    )
}

export default DisplayCuisine