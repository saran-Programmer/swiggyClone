import styles from "./DisplayFood.module.css"

const DisplayFood = (props) => {
    return(
    <div className={styles.container}>
        <div className={styles.imagecontainer}>
            <img src={props.image} alt="dish" />
            {
                ((props.isFreeDelivery===true)?<span className={styles.dicount}>Free Delivery</span>:null)
            }
            <div className={styles.overLay} />
            <div className={styles.offer}>{props.offer}</div>
        </div>
        <div className={styles.info}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.stars}><i class="fa-solid fa-star" /> {props.rating}</span>
            <span className={styles.address}>{props.address}</span>
        </div>
    </div>
    )
}

export default DisplayFood