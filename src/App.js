import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './pages/Landing';
import SignUp from "./pages/SignUp";
import Quiz from './pages/Quiz'
import RiverMenu from './components/RiverMenu'
import { ThemeProvider } from '@mui/material';
import { appTheme } from './themes/theme'

function App() {
  return ( <ThemeProvider theme={appTheme}>
      <Router>
        <RiverMenu />
        <main id="main">
          <Routes>
          <Route path='/' element={<Landing/>} exact/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
        </Routes>
        </main>
        
      </Router>
  </ThemeProvider>
      
  );
}

export default App;
