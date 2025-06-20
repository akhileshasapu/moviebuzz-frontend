import { useState } from "react";

import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewForm";
function MovieSearch() {
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const searchMovie = async () => {
    const res = await fetch(
      `https://movierbuzz-backend.onrender.com/api/reviews/movie?title=${title}`
    );
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const handleclick = () => {
    if (movie && movie.imdbID) {
      navigate("/addreview", { state: { movieId: movie.imdbID , movieposter:movie.Poster} });
    } else {
      alert("Movie ID not found. Please try again.");
    }
  };
  const handlereview = () => {
    if (movie && movie.imdbID) {
      navigate(`/viewdetails/${movie.imdbID}`, {
        state: { movietitle: movie.Title, poster: movie.Poster },
      });
    } else {
      alert("movieid not found");
    }
  };

  return (
    <div className="moviesearchpage">
      <Navbar />
      <div className="moviesearch">
        <input
          className="input"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter movie title"
        />
        <button onClick={searchMovie}>Search</button>
      </div>

      {movie ? (
        <div className="moviecard">
          <div className="postercard">
            <img src={movie.Poster} alt="" />
            
            <a
  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.Title + " trailer")}`}
  target="_blank"
  rel="noopener noreferrer"
><button>
  Watch Trailer   </button>
</a>
         
          </div>
          <div className="detailcard">
            <div className="top">
              <h3>{movie.Title}</h3>
            </div>

            <div className="below">
              <p>IMDB Rating:{movie.imdbRating}</p>
              <br />
              <strong>PLOT:</strong>
              <p>{movie.Plot}</p>

              <p>
                <strong>Director:</strong>
                {movie.Director}
              </p>
              <br />
              <strong>Cast:</strong>
              <p>{movie.Actors}</p>
              <br />
              <strong>Language:</strong>
              <p>{movie.Language}</p>
              <br />
              <strong>Awards:</strong>
              <p>{movie.Awards}</p>
              <br />
              
                <div className="bottom">
                  <strong>Box-Office:</strong>
                  <p>{movie.BoxOffice}</p>

                  <button className="viewreviews" onClick={handlereview}>
                    view reviews
                  </button>
                  <button className="addreview" onClick={handleclick}>
                    Add your review
                  </button>
                </div>
            

              <a
                className="more"
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  movie.Title
                )}+movie`}
                target="_blank"
                rel="noopener noreferrer"
              >
                more details
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="nomoviesearched">
          <h1>Uncover the reel magic </h1>
          <h2>
            search iconic films, pen your review, and witness the voices of a
            thousand movie lovers
          </h2>
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
