import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Help from "./pages/Help"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import "./App.css"


const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/offers", element: <Offers />},
  {path: "/help", element: <Help />},
  {path: "/login", element: <Login />},
  {path: "/Cart", element: <Cart />}
])

const App =  () => {
  return <RouterProvider router={router}/>
}

export default App