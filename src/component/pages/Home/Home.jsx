import React from 'react'
import homeStyle from './home.module.css'
import Navbar from '../../Navbar/Navbar'

const Home = () => {
  return (
    <div className={homeStyle.home}>
      <Navbar />
      <div className={homeStyle.hero}>
        <img src="" alt="" className={homeStyle.banner_image} />
        <div className={homeStyle.hero_caption}>
          <h1></h1>
          <p></p>
          <div className={homeStyle.hero_btn}>
            <button className={homeStyle.common_btn}>Play</button>
            <button className={`${homeStyle.common_btn} ${homeStyle.dark_btn}`}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home