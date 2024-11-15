import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Admin from "./Admin";

function appRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/users' element={<Signup />} />
            <Route path='/users/admin' element={<Admin />} />
        </Routes>
    )
}

export default appRoutes;