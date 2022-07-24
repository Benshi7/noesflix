import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "../../hooks/useForm";
import { types } from "../../types/types";

// eslint-disable-next-line no-unused-vars
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
  },
}));

export const InitialUsersReducer = {
  users: [],
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      break;
  }
};

const AddUser = () => {
  const [state, dispatch] = useReducer(usersReducer, InitialUsersReducer);
  const [form, handleForm] = useForm();

  const createUser = () => {
    const id = Date.now();

    const newUser = {
      id: id,
      user: form.user,
      name: form.name,
      password: form.password,
    }

    return newUser;
  };


  dispatch({
    type: types.ADD_USER,
    payload: "",
  });

  return "Asd";
};

export default AddUser;
