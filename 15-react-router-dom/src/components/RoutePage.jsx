import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Prodcuts from './Prodcuts'
import Pagenot from './Pagenot'
import Men from './Men'
import Women from './Women'
import AboutDetails from './AboutDetails'


const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:id' element={<AboutDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Prodcuts/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Route>
        
        <Route path='*' element={<Pagenot/>}/>

      </Routes>
    </div>
  )
}

export default RoutePage
