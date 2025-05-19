import React from 'react'
import Card from '../Card/Card'
import requests from '../../api/requests';

const CardList = () => {
  return (
    <>
      <Card title="Netflix ORIGINALS" fetchUrl={requests.fetchNetflixOrginals} isLargeCard={true}/>
      <Card title="Trending Now" fetchUrl={requests.fetchTrending} isLargeCard={false}/>
      <Card title="Top Rated" fetchUrl={requests.fetchTopRateMovies} isLargeCard={false}/>
      <Card title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeCard={false}/>
      <Card title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeCard={false}/>
      <Card title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeCard={false}/>
      <Card title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeCard={false}/>
      <Card title="Documentary" fetchUrl={requests.fetchDocumentaryMovies} isLargeCard={false}/>
      <Card title="TV Show" fetchUrl={requests.fetchTvShow} isLargeCard={false}/>

      
    </>
  );
}

export default CardList