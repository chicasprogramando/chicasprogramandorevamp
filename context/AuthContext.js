import React, { useEffect, useState } from "react";
import app from "../firebaseConfig";
import LoadingComponent from "../components/LoadingComponent";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [firebaseAuth, setFirebaseAuth] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(function (user) {
      setFirebaseAuth(user);
      setShowChild(true);
    });
  }, []);

  // useEffect(() => {
  //   const apiLogin = async () => {
  //     const r = await axios.post(
  //       endpoints.login(),
  //       {
  //         firebase_id: result.user.uid,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${result.user.idToken}`,
  //         },
  //       }
  //     );
  //     console.log(r, "la respuesta llega??");
  //   //   setUser()
  //   };
  //   apiLogin();
  // }, [firebaseAuth]);

  if (!showChild) {
    return <LoadingComponent />;
  } else {
    return (
      <Auth.Provider
        value={{
          user,
        }}
      >
        {children}
      </Auth.Provider>
    );
  }
};
