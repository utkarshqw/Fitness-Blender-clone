import { Route, Routes } from "react-router-dom";
import Card from "./Card";
import Cart from "./Cart";

import HomePage from "./HomePage";
import Login from "./Login";
import Store from "./Store";



export default function AllRoutes(){

    return (
        <>
        <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/store" element={<Store/>} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="*" element={<h1>The page you searched does not exist </h1>} />

        
        </Routes>
        </>
    )
}