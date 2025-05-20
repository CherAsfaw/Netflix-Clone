import React, { useEffect, useState } from 'react'
import homeStyle from './home.module.css'
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import axios from '../api/axios.jsx'
import requests from '../api/requests.jsx'
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";


function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOrginals);
        // console.log(request);
        const result = request.data.results;
        const randomIndex = Math.floor(Math.random() * result.length)
        const randomMovies = result[randomIndex]
        setMovies(randomMovies)
        // console.log(randomMovies);
      } catch (error) {
        console.log("error", error);
      }
    })()
  }, [])
  const handleClick = (movies) => {
      if (trailerUrl) {
        setTrailerUrl("")
      } else {
        movieTrailer(movies?.title || movies?.name || movies?.original_name)
          .then((url) => {
            console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get("v");
            console.log(videoId);
            setTrailerUrl(videoId);
          })
          .catch((error) => console.error("Trailer not found:", error));
      }
    }
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };



  return (
    <div className={homeStyle.home}>
      <div
        className={homeStyle.hero}
        style={{
          backgroundImage: `
          linear-gradient(to bottom, transparent, black), 
          url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")
        `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={homeStyle.hero_caption}>
          <h1>{movies?.title || movies?.name || movies?.original_name}</h1>
          <p>{truncate(movies?.overview, 150)}</p>
          <div className={homeStyle.hero_btn}>
            <button
              className={homeStyle.common_btn}
              onClick={() => handleClick(movies)}
            >
              <FaPlay size={16} /> play
            </button>
            <button className={`${homeStyle.common_btn} ${homeStyle.dark_btn}`}>
              {" "}
              <ImInfo size={16} />
              More Info
            </button>
          </div>
        </div>
      </div>
      <div style={{ padding: "48px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Banner