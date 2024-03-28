import styles from "./DisplayRestaurantDetails.module.css"

const DisplayRestaurantDetails = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={props.image} alt="resturent image" />
                <div className={styles.overLay} />
                <span className={styles.Delivery}>Free Delivery</span>
                <span className={styles.offer}>{props.offerDetails}</span>
            </div>
            <span className={styles.Title}>{props.Title}</span>
            <div className={styles.star}>
                <i class="fa-solid fa-star" /> {props.rating}
            </div>
            <div className={styles.Info}>
                <span className={styles.Type}>{props.Type}</span>
                <span className={styles.address}>{props.Location}</span>
            </div>
        </div>
    )
}

export default DisplayRestaurantDetails