import "./Quiz.css"
import PropTypes from 'prop-types'
import React from "react";
import {
  Container,
} from "@mui/material";
import Question from "../components/Question"

function Quiz({questions}) {
  return (
    <section className="layout-section theme-c">
      <Container sx={{pt:3}}>
      {questions.length > 0 && questions.map((question, index) => (
                <Question key={question.id} question={question} questionNumber={index + 1} totalQuestions={questions.length}/>
            ))}
      </Container>
    </section>
  );
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
}

export default Quiz;
