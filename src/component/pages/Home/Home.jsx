import React from 'react'
import homeStyle from './home.module.css'
import Navbar from '../../Navbar/Navbar'

const Home = () => {
  return (
    <div className={homeStyle.home}>
      <Navbar/>
    </div>
  )
}

export default Home