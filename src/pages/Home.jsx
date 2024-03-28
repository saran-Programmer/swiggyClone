import NavBar from "../components/NavBar"
import SideMenu from "../components/SideMenu"
import { useState } from "react"
import { useSelector} from "react-redux"
import OfferDisplayer from "../components/OfferDisplayer"
import DisplayFoodType from "../components/DisplayFoodType"
import DisplayRestaurant from "../components/DisplayRestaurant"
import DisplayFillters from "../components/DisplayFillters"
import DisplayFoodContainer from "../components/DisplayFoodContainer"
import DisplayCityButton from "../components/DisplayCityButton"
import DisplayCuisine from "../components/DisplayCuisine"
import DisplayExploreRestaurent from "../components/DisplayExploreRestaurent"
import Footer from "../components/Footer"
import FillterHeader from "../components/FillterHeader"

const Home = () => {

    const [scrollProgress, setScrollProgress] = useState(window.scrollY)

    window.addEventListener("scroll", () => {
        setScrollProgress(window.scrollY)
    })

    if(scrollProgress<1100){
        console.log("here")
    }


    const sideBarInfo = useSelector(state => state.isOpen)
    return(
        <div>
            {
                (scrollProgress<1100)?<NavBar />:<FillterHeader />
            }
            
            {
                (sideBarInfo)?<SideMenu />:null
            }
            <OfferDisplayer />
            <DisplayFoodType />
            <DisplayRestaurant />
            <DisplayFillters />
            <DisplayFoodContainer />
            <DisplayCityButton />
            <DisplayCuisine />
            <DisplayExploreRestaurent />
            <Footer />
            
        </div>
    )
}

export default Home