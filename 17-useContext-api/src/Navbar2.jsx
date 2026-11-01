import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from './ThemeContext'

const Navbar2 = () => {
    const data = useContext(ThemeDataContext);
    console.log(data)
  return (
    <div>
        <h1>{data[0]}</h1>
      <button onClick={()=> {
        data[1]('dark')
      }}>Change Theme</button>
    </div>
  )
}

export default Navbar2
