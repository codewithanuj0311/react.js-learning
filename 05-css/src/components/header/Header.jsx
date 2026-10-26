import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div>
      This is Header
      <button className={style.btn}>Login</button>
    </div>
  )
}

export default Header
