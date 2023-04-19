import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { Authentication } from './pages/Authentication';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Authentication/>} path='/'/>
          <Route element={<HomePage/>} path='/homepage'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
