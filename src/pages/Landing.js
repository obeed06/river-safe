import "./Landing.css";
import { Button, Container, Grid } from "@mui/material";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";

function Landing() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const getQuizzes = async () => {
      const quizzesFromServer = await fetchQuizzes();
      setQuiz(
        quizzesFromServer.length > 0 ? quizzesFromServer[0] : quizzesFromServer
      );
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
    <>
      <div id="banner">
        <div className="wrapper">
          <div className="content">
            <h1>Understanding your needs</h1>
          </div>
        </div>
      </div>
      <section className="layout-section theme-a type-a">
        <Container sx={{ mt: 2 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <h2>Take the Quick Check Quiz</h2>
              <p>{quiz.description}</p>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ pt: 3 }}
              >
                <Button component={Link} to="/quiz" variant="contained">
                  <Icon path={mdiChevronRight} size={1} /> Take Our Quiz
                </Button>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <img
                className="general"
                src={process.env.PUBLIC_URL + "/work-confused.svg"}
                alt="RiverSafe"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      {quiz?.questions?.length > 0 ? (
        <Quiz questions={quiz.questions} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Landing;
