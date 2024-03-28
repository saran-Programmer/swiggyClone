import styles from "./FillterHeader.module.css"

const FillterHeader = () => {
    return(
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <button>Filter</button>
                <button>Sort By</button>
                <button>Fast Delivery</button>
                <button>New On Swiggy</button>
                <button>Ratings 4+</button>
                <button>Pure Veg</button>
                <button>Offers</button>
                <button>Rs.300-Rs.600</button>
                <button>Less Than Rs.300</button>
            </div>
            <div className={styles.searchBar} />
        </div>
    )
}

export default FillterHeader