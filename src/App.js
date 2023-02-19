import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
