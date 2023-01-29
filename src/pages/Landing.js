import './Landing.css';
import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

function Landing() {
  return (
    <>
      <div id="banner">
        <div className="wrapper">
          <div className="content">
            <h1>Understanding your needs</h1>
          </div>
        </div>
      </div>
      <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <h2>Take the Quick Check Quiz</h2>
          <p>Measure your team&apos;s software delivery performance in less than a minute! Compare it to the rest of the industry
                by responding to <strong>five multiple-choice questions</strong>. Compare your team&apos;s performance to others, and
                discover which DevOps capabilities you should focus on to improve.</p>
          <Grid container item direction="row" justifyContent="flex-start" alignItems="center" sx={{pt: 3}}>
            <Button component={Link} to="/quiz" variant="contained">Take Our Quiz</Button>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <img className='general' src={process.env.PUBLIC_URL + '/illistration1.jpg'} alt="RiverSafe"/>
        </Grid>
      </Grid>
      </Container>
      
    </>
  );
}

export default Landing;
