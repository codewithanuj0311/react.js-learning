import React, { useState } from 'react'
import { useEffect } from 'react';

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(10);

  useEffect(()=> {
    console.log('useEffect is running...');
  }, [num])
  return (
    <div>
      <h1>Num is {num}</h1>
      <h1>Num2 is {num2}</h1>
      <button onClick={()=> {
        setnum(num+1)
      }}>Num</button>
      <button onClick={()=> {
        setnum2(num2-1)
      }}>Num2</button>
    </div>
  )
}

export default App