import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import { Home } from './Home';
import { Users } from './Users';
import { About } from './About';
import NaviBar from './components/NaviBar';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
