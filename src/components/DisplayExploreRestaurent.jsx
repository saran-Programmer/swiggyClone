import styles from "./DisplayExploreRestaurent.module.css"

const DisplayExploreRestaurent = () => {
    return(
        <div className={styles.container}>
            <span className={styles.text}>Explore Every Restaurants Near Me</span>
            <div className={styles.buttonContainer}>
                <button>Explore Restaurent Near Me</button>
                <button>Explore Top Restaurent Near Me</button>
            </div>
        </div>
    )
}

export default DisplayExploreRestaurent