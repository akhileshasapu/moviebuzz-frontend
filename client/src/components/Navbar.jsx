import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import { MdHome } from "react-icons/md";
function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const {  user, logout } = useAuth(); 
const navigate= useNavigate()
  const handlepro = () => {
    setShowProfile(prev => !prev);
  };
  const handlelogout =()=>{
   logout()
    navigate("/")
  }
  const homehandle=()=>{
    navigate("/searchmovie")
  }

  return (
    <div className="navbar ">
      <ul className="navbar-list ">
        <li><h1 className="navbar-title">Movie BuZZZ</h1></li>
        <li><button className='homebutton' onClick={homehandle}><MdHome size={30} /></button></li>
        <li className="profile-section">
          <button className="profile-button" onClick={handlepro}>
            <CgProfile size={40} />
          </button>
          

          {showProfile && (
            <div className="profile-popup">
              <h3>User Profile</h3>
              <p><strong>Username:</strong> {user?.username}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <button onClick={handlelogout}>logout</button>
            </div>
          )}

        </li>
        
      </ul>
    </div>
  );
}

export default Navbar;
