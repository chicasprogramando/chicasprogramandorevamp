import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";

import {
  AuthContainer,
  ConfirmButton,
  GoogleButton,
  FormGroup,
  SinupInput,
  SignupLabels,
  SignupWithEmail,
} from "./styles";

import { GoolgeLogo } from "../_common/Icons";

const SignIn = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const socialLogin = async (provider) => {
    try {
      const res = await firebase.auth().signInWithPopup(provider);
      const token = await res.getIdToken(true);
      console.log(res);
      console.log(token);
    } catch (error) {
      console.log({ error });
    }
  };

  const signInWithEmail = async () => {
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await user.sendEmailVerification();

      const token = await user.getIdToken(true);
      await localStorage.setItem("token", token);
    } catch (error) {
      localStorage.clear();
    }
  };

  return (
    <AuthContainer>
      <GoogleButton
        onClick={() => socialLogin(new firebase.auth.GoogleAuthProvider())}
      >
        <GoolgeLogo alt="google-logo" />
        <span>Signup with Google</span>
      </GoogleButton>
      <SignupWithEmail>o registrate con tu email</SignupWithEmail>
      <FormGroup>
        <SignupLabels>Email</SignupLabels>
        <SinupInput ref={emailRef} type="email" placeholder="you@email.com" />
      </FormGroup>
      <FormGroup>
        <SignupLabels>Password</SignupLabels>
        <SinupInput ref={passwordRef} type="password" />
      </FormGroup>

      <ConfirmButton onClick={() => signInWithEmail()}>
        Registrarme
      </ConfirmButton>
    </AuthContainer>
  );
};
export default withRouter(SignIn);
