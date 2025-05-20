import React, { useEffect, useState } from "react";
import axios from "../../Util/axios";
import cardStyle from "./card.module.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Card = ({ title, fetchUrl, isLargeCard }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get("v");
          console.log(videoId);
          setTrailerUrl(videoId);
        })
        .catch((error) => console.error("Trailer not found:", error));
    }
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <h2 className={cardStyle.titleCards}>{title}</h2>
      <div className={cardStyle.card_list}>
        {movies?.map((movie, i) => (
          <img
            onClick={() => handleClick(movie)}
            key={i}
            src={`${base_url}${
              isLargeCard ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`${cardStyle.card_poster} ${
              isLargeCard ? cardStyle.card_poster_large : ""
            }`}
          />
        ))}
      </div>
      <div style={{ padding: "48px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
};

export default Card;
