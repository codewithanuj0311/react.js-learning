import React from 'react'

const Number = (props) => {
    // console.log(props)
  return (
    <div>
      <span className='bg-white flex items-center justify-center block w-15 h-15 rounded-full
       text-black font-bold'>{props.val + 1}</span>
    </div>
  )
}

export default Number
