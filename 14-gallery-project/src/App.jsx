import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const App = () => {

  const [imgData, setImgData] = useState([]);

  const getImageData = async ()=> {
    const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
    setImgData(res.data);
    console.log(res.data)
  }
  useEffect(()=> {
    getImageData()
  }, [])

  let imageData = 'No Data Available';

  if(imgData.length > 0) {

  imageData = imgData.map((ele, i)=> {
      return (
        <img src={ele.download_url} alt={ele.author} key={i} className='w-70 h-70 bg-cover bg-center'/>
      )
    })
  }

  return (
    <div className='flex flex-col p-10 bg-amber-100 gap-20 min-h-screen'>
      <h1 className='text-red-500 font-bold text-2xl'>Gallery</h1>
      <div className="flex gap-18 flex-wrap">
        {imageData}
      </div>
    </div>
  )
}

export default App
