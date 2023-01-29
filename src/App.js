import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './pages/Landing';
import SignUp from "./pages/SignUp";
import Quiz from './pages/Quiz'
import RiverMenu from './components/RiverMenu'

function App() {
  return ( <>
      <Router>
        <RiverMenu />
        <Routes>
          <Route path='/' element={<Landing/>} exact/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
        </Routes>
      </Router>
  </>
      
  );
}

export default App;
