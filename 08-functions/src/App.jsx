import React from 'react'

const App = () => {
  function inputChanging(val) {
    console.log(val)
  }
  return (
    <div>
      <button className="btn" onClick={()=> {
        console.log('Clicked')
      }}>Click Here</button>
      <input type="text" name="name" id="name" placeholder='Enter Name'  onChange={function(e) {
        inputChanging(e.target.value)
      }}/>
      <div className="page1" onWheel={()=> {
        console.log('scrolling..')
      }}></div>
      <div className="page2" onWheel={function() {
        console.log('Scrolling2')
      }}></div>
    </div>
  )
}

export default App
