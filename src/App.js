
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/index';
import About from './Pages/AboutUs';
import Support from './Pages/Support';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Expertise from './Pages/Expertise';


function App() {
  // const pathname = window.location.pathname
  // console.log(pathname);
  return (
    <Router>
      <Header />
      <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/expertise' element={<Expertise/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
