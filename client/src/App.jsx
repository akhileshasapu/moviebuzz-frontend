import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import MovieSearch from './pages/MovieSearch';
import ReviewForm from './pages/ReviewForm'
import ReviewDetails from './pages/ReviewDetails'
import './App.css'
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/searchmovie" element={<MovieSearch />} />
        <Route path="/addreview" element={<ReviewForm />} />
        <Route path="/viewdetails/:movieId" element={<ReviewDetails />} />

          
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
