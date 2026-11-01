import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

  //using fetch api
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(res);
    const data = await res.json();
    console.log(data);
  }

  //using axios third party api
  const getDataAxios = async ()=> {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res);
    console.log(res.data);
    setdata(res.data)
  }
  return (
    <div>
      <button className="btn" onClick={getDataAxios}>Get Data</button>
      <div>{data.map((ele, i)=> {
        return (<h2 key={i}>{ele.id} Hello</h2>)
      })}</div>
    </div>
  )
}

export default App
