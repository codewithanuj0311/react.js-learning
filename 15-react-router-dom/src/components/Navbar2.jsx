import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> {
        navigate('/')
      }}>Return to Home</button>
    </div>
  )
}

export default Navbar2
