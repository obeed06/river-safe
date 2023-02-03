import "./Landing.css";
import { Button, Container, Grid } from "@mui/material";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function Landing({ quizzes }) {
  if (
    typeof quizzes === "undefined" &&
    quizzes === null &&
    quizzes.length === 0
  ) {
    //TODO 404 no quizzed found
    return <p>No Quizzes found</p>;
  }

  return (
    <>
      <PageHeader pageHeading="Understanding your needs" />
      {quizzes.length > 0 &&
        quizzes.map((quiz, index) => (
          <section key={'quiz'+index} className="layout-section theme-a type-a">
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
                    <Button
                      component={Link}
                      to={"/quiz/" + quiz.slug}
                      variant="contained"
                    >
                      <Icon path={mdiChevronRight} size={1} /> Take Our Quiz
                    </Button>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                  <img
                    className="general"
                    src="/work-confused.svg"
                    alt="RiverSafe"
                  />
                </Grid>
              </Grid>
            </Container>
          </section>
        ))}
    </>
  );
}

Landing.propTypes = {
  quizzes: PropTypes.array.isRequired,
};

export default Landing;
