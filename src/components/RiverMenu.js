import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Button, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#031926" : "transparent",
      color: "white",
      transition: trigger ? "0.3s" : "0.5s",
    },
  });
}


export default function RiverElevatedAppBar(props) {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link sx={{ mr: 2 }} href="https://riversafe.co.uk/">
              <img
                style={{ height: "25px" }}
                src="/riversafe-logo.svg"
                alt="RiverSafe"
              />
            </Link>
            {route !== "authenticated" ? (
              <></>
            ) : (
              <Button onClick={() => logOut()}>Logout</Button>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

RiverElevatedAppBar.propTypes = {
};