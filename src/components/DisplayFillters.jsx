import styles from "./DisplayFillter.module.css"
import { useState } from "react"

const DisplayFillters = () => {
    const [noFilters, setNoFilters] = useState(false)
    const [isSortedBy, setISSortedBy] = useState(false)
    const [isFastDelivery, setIsFastDelivery] = useState(false)
    const [newOn, setNewOn] = useState(false)
    const [isRatingHigh, setISRatingHigh] = useState(false)
    const [isOnOffer, setIsOffer] = useState(false)
    const [isInBetweenAmount, setInBetweenAmount] = useState(false)
    const [isLowAmount, setIsLowAmount] = useState(false)
    const [isVeg, setIsVeg] = useState(false)
    let [activeFilters, setActiveFilters] = useState(0)

    const handleToggleFilter = (props, id) => {
       if(id === 3){
        setIsFastDelivery(!isFastDelivery)
        if(isFastDelivery !== true){
            props.target.classList.add(styles.active)
            activeFilters += 1
            setActiveFilters(activeFilters)
        }else{
            props.target.classList.remove(styles.active)
            activeFilters -= 1
            setActiveFilters(activeFilters)
        }
       }else if(id === 4){
        setNewOn(!newOn)
        if(newOn !== true){
            props.target.classList.add(styles.active)
            activeFilters += 1
            setActiveFilters(activeFilters)
        }else{
            props.target.classList.remove(styles.active)
            activeFilters -= 1
            setActiveFilters(activeFilters)
        }
        }else if(id === 5){
        setISRatingHigh(!isRatingHigh)
        if(isRatingHigh !== true){
            props.target.classList.add(styles.active)
            activeFilters += 1
            setActiveFilters(activeFilters)
        }else{
            props.target.classList.remove(styles.active)
            activeFilters -= 1
            setActiveFilters(activeFilters)
        }
       }else if(id === 6){
        setIsVeg(!isVeg)
        if(isVeg !== true){
            props.target.classList.add(styles.active)
            activeFilters += 1
            setActiveFilters(activeFilters)

        }else{
            props.target.classList.remove(styles.active)
            activeFilters -= 1
            setActiveFilters(activeFilters)
        }
       }else if(id === 7){
        setIsOffer(!isOnOffer)
        if(isOnOffer !== true){
            props.target.classList.add(styles.active)
            activeFilters += 1
            setActiveFilters(activeFilters)
        }else{
            props.target.classList.remove(styles.active)
            activeFilters -= 1
            setActiveFilters(activeFilters)
        }
       }else if(id === 8){
        setInBetweenAmount(!isInBetweenAmount)
        if(isInBetweenAmount !== true){
            props.target.classList.add(styles.active)
            activeFilters += 1
            setActiveFilters(activeFilters)
        }else{
            props.target.classList.remove(styles.active)
            activeFilters -= 1
            setActiveFilters(activeFilters)
        }
       }else if(id === 9){
        setIsLowAmount(!isLowAmount)
        if(isLowAmount !== true){
            props.target.classList.add(styles.active)
            activeFilters += 1
            setActiveFilters(activeFilters)
        }else{
            props.target.classList.remove(styles.active)
            activeFilters -= 1
            setActiveFilters(activeFilters)
        }
       }
    }
    

    return(
        <div className={styles.container}>
            <div className={styles.text}>
                Restaurants with online food delivery in Coimbatore
            </div>
            <div className={styles.filter}>
                <button onClick={(props) => {
                    handleToggleFilter(props, 1)}}>{(activeFilters > 0)?<span className={styles.notification}>{activeFilters}</span>:null} Filter <i class="fa-solid fa-filter" onClick={(props) => {
                    handleToggleFilter(props, 1)}}/></button>
                <button onClick={(props) => {
                    handleToggleFilter(props, 2)}}>Sort By</button>
                <button onClick={(props) => {
                    handleToggleFilter(props, 3)}}>Fast Delivery {(isFastDelivery===true)?<i class="fa-solid fa-xmark" />:null}</button>
                <button onClick={(props) => {
                    handleToggleFilter(props, 4)}}>New On Swiggy {(newOn===true)?<i class="fa-solid fa-xmark" />:null}</button>
                <button onClick={(props) => {
                    handleToggleFilter(props, 5)
                    }}>Rating 4.0+ {(isRatingHigh===true)?<i class="fa-solid fa-xmark" />:null}</button>
                <button onClick={(props) => {
                    handleToggleFilter(props, 6)}}>Pure Veg {(isVeg === true)?<i class="fa-solid fa-xmark" />:null}</button>
                <button onClick={(props) => {
                    handleToggleFilter(props, 7)}}>Offers {(isOnOffer===true)?<i class="fa-solid fa-xmark" />:null}</button>
                <button onClick={(props) => {
                    handleToggleFilter(props, 8)}}>Rs.300-Rs.600 {(isInBetweenAmount===true)?<i class="fa-solid fa-xmark" />:null}</button>
                <button onClick={(props) => {
                    handleToggleFilter(props, 9)}}>Less Than Rs.300 {(isLowAmount===true)?<i class="fa-solid fa-xmark"/>:null}</button>
            </div>
        </div>
    )
}

export default DisplayFillters