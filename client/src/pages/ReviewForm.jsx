import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ReviewForm() {
  const [form, setForm] = useState({ reviewText: "", score: 0 });
  const { token } = useAuth();
const location = useLocation()

const movieId = location.state?.movieId
  const poster = location.state?.movieposter;
const navigate = useNavigate()
   console.log("form data:", form);
console.log("movieId sending:", movieId);
  const submitReview = async () => {
    console.log("recived token:", token);

    const res = await fetch("https://movierbuzz-backend.onrender.com/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
   
      body: JSON.stringify({ movieId:movieId,...form }),
    });
    
    const data = await res.json();
    

     if (res.ok) {
      alert(data.message || "Review submitted!");
      navigate("/searchmovie");
    } else{
      alert(data.message)
    }
    
   
  };

  return (
    
<div className="navheader">
   <Navbar />
  <div className="reviewformbg">
    <div className="formposter">
      <img src={poster} alt="" />
    </div>
   
   <div className="reviewform">
    <div ><textarea
    placeholder="Write your review"
    onChange={(e) => setForm({ ...form, reviewText: e.target.value })}
  /></div>
  

  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={form.score >= star ? "star filled" : "star"}
        onClick={() => setForm({ ...form, score: star })}
      >
        ★
      </span>
    ))}
  </div>

  <button onClick={submitReview}>Submit Review</button>
</div>
</div></div>
  

  );
}

export default ReviewForm;
