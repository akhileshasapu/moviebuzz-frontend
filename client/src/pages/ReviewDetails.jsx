import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function ReviewDetails() {
  const { movieId } = useParams();
  const [reviews, setreviews] = useState([]);
  const location = useLocation();
  const movietitle = location.state?.movietitle;
  const poster = location.state?.poster;

  useEffect(() => {
    fetch(`https://movierbuzz-backend.onrender.com/api/reviews/${movieId}`)
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, [movieId]);

  return (
    <div>
      <Navbar />
      <div className="fullreview">
        <div className="leftreview">
          <img src={poster} alt={movietitle} />
        </div>
        <div className="rightreview">
          {reviews ?(
            reviews.map((review, i) => (
              <div key={i}>
                <p className="review-username"><strong>Username:</strong>&nbsp;&nbsp;{review.userId.username}</p>
                <p className="review-text">Review:&nbsp;&nbsp;<strong>"{review.reviewText}"</strong></p>
                <div className="reviewscore">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      {review.score >= star ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
            ))):(
              <h1>NO REVIEWS YET</h1>
            )}
        </div>
      </div>
    </div>
  );
}

export default ReviewDetails;
