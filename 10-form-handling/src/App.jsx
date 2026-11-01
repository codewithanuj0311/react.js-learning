import React from 'react'
import { useState } from 'react';

const App = () => {
  const formSubmitted = (e) => {
    e.preventDefault();
    console.log('form submitted', name);
    setname('')
  }

  const [name, setname] = useState('')
  return (
    <div>
      <form onSubmit={(e)=> {
        formSubmitted(e)
      }}>
        <input type="text" name="name" id="name" placeholder='Enter your name' value={name}
    onChange={(e)=> {
          setname(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
