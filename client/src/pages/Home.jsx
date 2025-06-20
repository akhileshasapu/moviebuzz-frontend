import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // 🔁 Navigate to login page
  };

  const handleSignup = () => {
    navigate("/signup"); // 🔁 Navigate to signup page
  };

  return (
    <div className="home">
      <div className="title">
        <h1>Movie BuZZZ</h1>
        <div className="insidehome">
          <button className="btn login" onClick={handleLogin}>
            Login
          </button>
          <button className="btn signin" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
      <div className="image-grid">
        <div className="image-row image1">
          <img className="one"
            src="https://m.media-amazon.com/images/M/MV5BMmM3NzgzYzMtMTQ5Ni00MWExLWJlMDYtNTRmN2M5Zjc3NDA0XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg"
            alt="Superman"
          />
          <img className="two"
            src="https://best-media-world.com/wp-content/uploads/2019/04/5e1e6710-c59c-427f-ae73-4dde0d4c7e2d.jpeg"
            alt="Avengers"
          />
        </div>

        <div className="image-row image2">
          <img className="one"
            src="http://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg"
            alt="Avatar"
          />
          <img className="two"
            src="https://m.media-amazon.com/images/I/61N+9bKbwNL._UF894,1000_QL80_.jpg"
            alt="Spiderman"
          />
        </div>

        <div className="image-row image3">
          <img className="one"
            src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1000_.jpg"
            alt="Iron Man"
          />
          <img className="two"
            src="https://sm.mashable.com/t/mashable_me/photo/default/1_npc3.1248.jpg"
            alt="Interstellar"
          />
        </div>

        <div className="image-row image4">
          <img className="one"
            src="	https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg"
            alt="Spider-Verse 2"
          />
          <img className="two" src="	https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
