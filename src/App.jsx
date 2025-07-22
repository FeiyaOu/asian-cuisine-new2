import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu from "./assets/features/menu/Menu";
import Cart from "./assets/features/cart/Cart";
import Order from "./assets/features/order/Order";

const router=createBrowserRouter([{
  element:<AppLayout/>,
  children:[{path:"/",element:<Home/>},
    {path:"/menu",element:<Menu/>},
    {path:"/cart",element:<Cart/>},
    {path:"/order",element:<Order/>},
  ]
}]);

function App() {
  return <RouterProvider router={router}/>
};

export default App;
