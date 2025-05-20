import React  from 'react'

import Navbar from '../../Navbar/Navbar'

import CardList from '../../Cards/Cardlist/CardList';

import Footer from '../../Footer/Footer'
import Banner from '../../Banner/Banner';



const Home = () => {
  



  return (
    <>
      <Navbar />
      <Banner/>
      <CardList />
      <Footer/>
    </>
  );
}

export default Home