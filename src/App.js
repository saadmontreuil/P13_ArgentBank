import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
