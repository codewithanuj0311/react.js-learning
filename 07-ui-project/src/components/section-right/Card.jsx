import React from 'react'
import Number from './Number'

const Card = (props) => {
    console.log(props)
    return (
      <div
        className="flex-1 min-h-0 p-10 bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url("${props.logo}")`
        }}
      >
        <Number val={props.val}/>
      </div>
    )
  }

export default Card
