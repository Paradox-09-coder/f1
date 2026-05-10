import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Drivers from './pages/Drivers';
import News from './pages/News';
import Results from './pages/Results';
import Schedule from './pages/Schedule';
import Teams from './pages/Teams';

// Not Found Page
import NotFoundPage from './pages/NotFoundPage';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drivers' element={<Drivers />} />
        <Route path='/news' element={<News />} />
        <Route path='/results' element={<Results />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/teams' element={<Teams />} />
        
        <Route path='*' element={<NotFoundPage />} />

      </Routes>

      <Footer/>
    </>
  );
}

export default App;
