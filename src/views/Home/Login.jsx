import React, { useContext } from "react";
import { Container, Button, TextField, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url('./assets/blob-scene-haikei.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  container: {
    height: "100%",
    marginTop: theme.spacing(10),
    backgroundColor: "red",
  },
}));


const Login = () => {


  const {authState, dispatch} = useContext(AuthContext);
  console.log(authState)


  dispatch({
    types: types.LOGIN,
    payload: "",
});

  const login = (user, dispatch) => {
    console.log(authState.user);
    dispatch({
      types: types.LOGIN,
      payload: user,
  });
  }

  // delete line over here?
  login();
  const classes = useStyles();

  return (

    <Grid container component="main" className="classes.root">
          <h2>{authState.user}</h2>
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className="classes.container"
        style={{ marginTop: "10%", textAlign: "center"}}
      >
        <h1>Welcome back!</h1>
        <TextField
          id="outlined-basic user"
          label="User"
          type="text"
          variant="outlined"
          name="user"
          //value={form.user}
        />
        <br></br>
        <h1> </h1>
        <TextField
          id="outlined-basic pass"
          label="Password"
          type="password"
          variant="outlined"
          name="pass"
          //value={form.pass}
        />
        <br></br>
        <br></br>
        <Button
          variant="contained"
          type="submit"
          value="Submit"
        >
          <a href="/">
          Login

          </a>
        </Button>
        <p>{authState.user}</p>
        <br></br>
        <h1> </h1>
      </Container>
    </Grid>
  );
};

export default Login;
