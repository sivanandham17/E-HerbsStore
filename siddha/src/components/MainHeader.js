import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/main1.jpg'
import '../pages/home/home.css'

const MainHeader = () => {
  return (
    <div style={{ backgroundImage: 'url(' + Image +')', backgroundSize: '97%'}}>
    <header className='main_header'>
      <div className='container main_header-container'>
        <div className='main_header-left'>
          {/* <h4>Choose your looks</h4> */}
          <h1>Welcome To</h1> <br></br>
          <h1>E - HERBS STORE</h1><br></br>
          {/* <p>Explore More Products !!!  Explore More Styles !!!</p> */}

          <Link className='btn' to='/Product' >Buy Product</Link>
        </div>
        <div className='main_header-right'>
        </div>
      </div>
    </header>
    </div>
  )
}
export default MainHeader
