import React from 'react'
import {  Routes, Route } from "react-router-dom";
import About from  './About'
import Home from './Home'
const Index=()=>{
    return(
        <>
        <Routes>
        <Route path='/' element={<Home />} />
<Route path='/About' element={<About/>} />
        </Routes>
        </>
    )
}
export default Index;