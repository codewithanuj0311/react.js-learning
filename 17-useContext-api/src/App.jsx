import React from 'react'
import { useContext } from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import { ThemeDataContext } from './ThemeContext'

const App = () => {
  const data = useContext(ThemeDataContext);
  return (
    <div className={data[0]}>
      <Navbar/>
      <Navbar2/>
    </div>
  )
}

export default App
