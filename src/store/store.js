import {legacy_createStore as createStore} from "redux"


const sideMenu = (state = {isOpen: false}, action) => {
    if(action.type === "toggleSideMenu"){
        console.log(state.isOpen)
        return{
            isOpen: !state.isOpen,
        }
}
    return state
}

const store = createStore(sideMenu)

export default store