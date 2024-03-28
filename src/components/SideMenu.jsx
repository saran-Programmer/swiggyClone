import styles from "./SideMenu.module.css"

const SideMenu = () => {
    return(
        <div>
            <div className={styles.menuContent}>
                <a href="#">Home</a>
                <a href="#">Offer</a>
                <a href="#">Search</a>
                <a href="#">Help</a>
                <a href="#">Cart</a>
            </div>
        </div>
        
    )
}

export default SideMenu