import React from 'react'
import './header.css'
import HB from './HeadBtns'
import HS from './HeadSocials'
import ME from '../../assets/images/profile/me.png'
import {BsFileArrowDownFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>León Arellano</h1>
        <h5 className="title">Frontend Developer</h5>
        <HB/>
        <HS/>
        <div className="me">
          <img src={ME} alt="me" /> 
        </div>
        <a href="#contact" className='scroll__down'><BsFileArrowDownFill/></a>
      </div>
    </header>
  )
}

export default Header
