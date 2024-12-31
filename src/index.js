import './css/general.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import Header from './header/header';

import Homepage from './componants/homepage/homepage';
import News from './componants/news/news';
import Movies from './componants/movies/movies';
import Series from './componants/series/series';
import Info from './componants/info/info';
import Sources from './componants/sources/sources';

import { Routes, BrowserRouter, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/News" element={<News />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Sources" element={<Sources />} />
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
