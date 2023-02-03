import "./Quiz.css";
import PropTypes from "prop-types";
import React from "react";
import { useParams } from "react-router";
import { Container } from "@mui/material";
import Question from "../components/Question";
import PageHeader from "../components/PageHeader";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Quiz({ quizzes }) {
  let { slug } = useParams();
  if (!quizzes) return <div>Loading...</div>;
  let quiz = quizzes.find(q => {
      return q.slug == slug
  })

  if (!quiz) {
    //TODO redirect to 404
    <p>Error quiz not found</p>
  }

  return (
    <>
      <PageHeader pageHeading="Understanding your needs" />
      <section className="layout-section theme-c">
        <Container sx={{ pt: 3 }}>
          {quiz.questions.length > 0 &&
            quiz.questions.map((question, index) => (
              <Question
                key={question.id}
                question={question}
                questionNumber={index + 1}
                totalQuestions={quiz.questions.length}
              />
            ))}
        </Container>
      </section>
    </>
  );
}

Quiz.propTypes = {
  quizzes: PropTypes.array.isRequired,
};

export default withAuthenticator(Quiz);
