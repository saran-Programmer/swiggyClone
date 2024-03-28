import styles from "./NavBar.module.css"
import logo from "../assets/logo.png"
import {useDispatch, useSelector} from "react-redux"

const NavBar = () => {

    const userLocation = "Ariyankuppam, Puducherry-605004, India"
    const numberofItems = 0
    const userName = "Saran G"

    const Dispatch = useDispatch()

    const handleSideMenuToggle = () => {
        Dispatch({type: "toggleSideMenu"})
    }


    return(
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logo} alt="swiggy"/>
                    
                </div>
                    <span className={styles.otherLink}>Home</span>
                    <span className={styles.location}>{userLocation} <i className="fa-solid fa-angle-down"/></span>
                </div>
                <div className={styles.right}>
                    <a href="#"><i className="fa-solid fa-magnifying-glass" /> Search</a>
                    <a href="#"><i className="fa-solid fa-certificate"></i>Offers</a>
                    <a href="#"><i className="fa-solid fa-life-ring"></i> Help</a>
                    <a href="#"><i className="fa-regular fa-user"></i>{userName}</a>
                    <button className={styles.cartButton}>{numberofItems} Cart</button>
                </div>
                <div className={styles.SideMenu}>
                        <a href="#" className={styles.menuIcon} onClick={handleSideMenuToggle}><i className="fa-solid fa-bars" /></a>
                </div>
            </div>
    )
}

export default NavBar