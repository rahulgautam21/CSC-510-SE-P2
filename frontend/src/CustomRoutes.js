import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./core/Home"

const CustomRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;