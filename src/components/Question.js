import "./Question.css";
import PropTypes from "prop-types";
import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";

function Question({ question, questionNumber, totalQuestions }) {
  console.log(question);
  return (
    <>
      <a id="leadtime" className="question-anchor"></a>
      <h3 className="q-eyebrow">Question {questionNumber} of {totalQuestions}</h3>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item md={4}>
          <h2 className="q-headline">{question.metric}</h2>
          <div className="q-image">
            <img
              className="general"
              src={process.env.PUBLIC_URL + "/cloud-server-antenna.svg"}
              alt="RiverSafe"
            />
          </div>
        </Grid>
        <Grid item md={8}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {question.question}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group-TODO">
              {question.options.length > 0 &&
                question.options.map((option) => (
                  <>
                    <FormControlLabel
                      key={option.id}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  </>
                ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

Question.propTypes = {
  question: PropTypes.node.isRequired,
  questionNumber: PropTypes.string.isRequired,
  totalQuestions: PropTypes.string.isRequired,
};

export default Question;
