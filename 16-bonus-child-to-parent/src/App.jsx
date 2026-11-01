import React, { useState } from 'react'
import Navbar from './Navbar'

const App = () => {

  const [theme, setTheme] = useState('Light')
  return (
    <div>The theme is {theme}
    <Navbar theme={theme} setTheme={setTheme}/>
    </div>
    
  )
}

export default App