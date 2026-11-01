import React from 'react'
import Arrow from './Arrow'
import HeroText from './HeroText'

const TextLeft = () => {
  return (
    <div className='flex flex-1 flex-col justify-between'>
      <HeroText/>
      <Arrow/>
    </div>
  )
}

export default TextLeft
