import React from 'react'
import {  Routes, Route } from "react-router-dom";
import About from  './About'
import Users from '../Components/User'
import Home from './Home'
const Index=()=>{
    return(
        <>
        <Routes>
        <Route path='/' element={<Home />} />
<Route path='/About' element={<About/>} />
<Route path="/user-details/:id" element={<Users/>} />
        </Routes>
        </>
    )
}
export default Index;