import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0);
  const [name, setname] = useState({name:"Anuj", age: 28});
  function increaseNum() {
    // setnum(num+1);
    setnum(prev=>(prev+1)); //batch update
    setnum(prev=> (prev+1));
    setnum(prev=> (prev+1));
    console.log = name.name;
    // const newName = {...name};
    // newName.name = "Kapil";
    setname(prev => ({...prev, name:"Rahul"}))
  }
  function decreaseNum() {
    setnum(num-1)
  }
  function increase10() {
    setnum(num+10)
  }
  return (
    <div>
      <h1>{num}</h1>
      <h1>{name.name}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={increase10}>Increase by 10</button>
    </div>
  )
}

export default App