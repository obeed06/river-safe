import "./App.css";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth";
import { Authenticator } from '@aws-amplify/ui-react';
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import RiverMenu from "./components/RiverMenu";
import { Login } from "./components/Login";

function App() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const getQuizzes = async () => {
      const quizzesFromServer = await fetchQuizzes();
      setQuizzes(quizzesFromServer);
    };

    getQuizzes();
  }, []);

  //Fetch Tasks
  const fetchQuizzes = async () => {
    const res = await fetch("http://localhost:5000/quiz");
    const data = await res.json();

    return data;
  };

  return (
    <Authenticator.Provider>
      <ThemeProvider theme={appTheme}>
        <Router>
          <RiverMenu />
          <main id="main">
            <Routes>
              <Route path="/" element={<Landing quizzes={quizzes} />} exact />
              <Route
                path="/quiz/:slug"
                element={
                  <RequireAuth>
                    <Quiz quizzes={quizzes} />
                  </RequireAuth>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </Router>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

App.propTypes = {
  signOut: PropTypes.func,
  user: PropTypes.node,
};

export default App;
