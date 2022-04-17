import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Home } from "./Home/Home"
import { Login } from "./Login/Login"
import { Signup } from "./Signup/Signup"
import User from './Users/User'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element= {<Home/>}></Route>
        <Route path="/login"  element= {<Login/>}></Route>
        <Route path="/signup"  element= {<Signup/>}></Route>
        <Route path="/users"  element= {<User/>}></Route>
    </Routes>
  )
}
