import { useRoutes, BrowserRouter } from 'react-router-dom'
import {
  Home,
  MyAccount,
  MyOrder,
  MyOrders,
  SignIn,
  NotFound
} from "../";
import { NavBar } from "../../components/NavBar";
import '../../index.css';
import { ShoppingCartProvider } from '../../context/Context';
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}
export const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter >
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>


  )
}

