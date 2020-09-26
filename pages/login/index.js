import React, { useState, useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import app from "../../firebaseConfig";
import { Auth } from "../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import endpoints from "../../utils/endpoints";

const Login = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const router = useRouter();
  const { user } = useContext(Auth);
  const [error, seterror] = useState("");

  const emailLogin = async (e) => {
    e.preventDefault();
    const { user, pass } = e.target.elements;

    await app
      .auth()
      .signInWithEmailAndPassword(user.value, pass.value)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  const socialLogin = async (provider) => {
    await app
      .auth()
      .signInWithPopup(provider)
      .then(async (result) => {
        console.log(result.user.idToken, "el utser");
        
        // router.push("/");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  return (
    <div className="w-full mt-12 flex flex-col items-center justify-center">
      {!user ? (
        <div className="w-1/3 min-w-lg">
          <div className="w-full flex justify-center items-center mt-8">
            <div className="w-full">
              <form
                className="px-8 pt-6 pb-8 mb-4 w-full"
                onSubmit={emailLogin}
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="username"
                  >
                    Usuario/a
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="user"
                    type="text"
                    placeholder="user"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-lg"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 text-lg mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>

                  <a
                    className="inline-block align-baseline font-bold text-sm text-greyDarkest hover:text-purple"
                    href="#"
                  >
                    Olvide mi contraseña
                  </a>
                </div>
              </form>
              <div className="mt-12 flex items-center flex-col">
                <button
                  className="hover:bg-purple text-greyDarkest hover:text-white py-2 px-4 border border-purple rounded my-8"
                  type="danger"
                  style={{ marginRight: 10 }}
                  onClick={() => socialLogin(googleAuthProvider)}
                >
                  Ingresar con Google
                </button>
                <span>
                  No tenes cuenta?
                  <Link href="/signup">
                    <button
                      className="mx-2 text-purple hover:underline cursor-pointer "
                      type="link"
                    >
                      Registrate Ahora!
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <span className="m-4 text-lg">{`Estas loggeadx como ${user.displayName}`}</span>
          <button
            className="bg-purple text-white transform hover:scale-105 font-bold py-2 p-4 rounded w-48"
            onClick={() => app.auth().signOut()}
            key="logout"
            type="primary"
          >
            Cerrar Sesión
          </button>
        </>
      )}
    </div>
  );
};
export default Login;
