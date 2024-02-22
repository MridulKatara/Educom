import React from "react";
import AuthFrom from "../components/AuthFrom";
import { useDispatch } from "react-redux";
import { signup } from "../store/user/user.actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const handleSubmit = async ({
    displayName,
    email,
    password,
    confirmPassword,
  }) => {
    dispatch(signup(displayName, email, password, confirmPassword));
  };

  return <AuthFrom onSignUp={true} handleSubmit={handleSubmit} />;
};

export default SignUp;
