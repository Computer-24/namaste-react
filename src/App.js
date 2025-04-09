import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import {Error} from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {Shimmer} from "./components/Shimmer";
import UserContext from "./utils/context/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/store/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const data = {
            loggedUser: "Akhay Sainin",
        }
        setUserInfo(data)
    }, [])
    return (
        <Provider store={appStore}>
            <div className="p-2">
                <UserContext.Provider value={{loggedUser: userInfo.loggedUser, setUserInfo}}>
                    <Header/>
                    <Outlet/>
                </UserContext.Provider>
            </div>
        </Provider>

    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}>
                    <About/>
                </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}>
                    <Grocery/>
                </Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
        ],
        errorElement: <Error/>,
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
