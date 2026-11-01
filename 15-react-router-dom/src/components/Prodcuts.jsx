import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Prodcuts = () => {
  return (
    <div className='flex'>
      <Link to='men'>Men</Link>
      <Link to='women'>Women</Link>
      <Outlet/>
    </div>
    
  )
}

export default Prodcuts
