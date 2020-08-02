import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";

import { GoolgeLogo } from "../_common/Icons";

const SignIn = () => {
  // Mover esto a un hook
  const [error, seterror] = useState("");
  const socialLogin = async (provider) => {
    try {
      const res = await firebase.auth().signInWithPopup(provider);
      console.log(res);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <button
        onClick={() => socialLogin(new firebase.auth.GoogleAuthProvider())}
      >
        <GoolgeLogo />
      </button>
    </div>
  );
};
export default withRouter(SignIn);
