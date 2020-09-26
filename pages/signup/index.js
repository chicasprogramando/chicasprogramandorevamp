import React, { useState } from "react";
import app from "../../firebaseConfig";
import * as firebase from "firebase/app";
import { useRouter } from "next/router";


const Signup = () => {
  const [error, seterror] = useState("");
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const router = useRouter();


  const handleSignUp = async (e) => {
    e.preventDefault();
    const { user, password } = e.target.elements;

    await app
      .auth()
      .createUserWithEmailAndPassword(user.value, password.value)
      .then((result) => {
        console.log(result);
        router.push('/codigo_de_conducta')
        

      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  

  const socialLogin = async (provider) => {
    console.log('esta entrando bien')
    await app
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        router.push('/codigo_de_conducta')


      })
      .catch((error) => {
        seterror(error.message);
      });
  };



  return (
    <div className="flex flex-col px-12 w-full items-center">
        <span className="my-12"> Crea tu cuenta y sumate a nuestra comunidad! </span>
      <form
        className="px-8 pt-6 pb-8 mb-4 w-1/3"
        onSubmit={handleSignUp}
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
            placeholder="usuario"
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
         Crear cuenta
          </button>

        </div>
        <div className="mt-12 flex items-center flex-col h-32 ">
          <button
            className="hover:bg-purple text-greyDarkest hover:text-white py-2 px-4 border border-purple rounded my-8"
            onClick={() => socialLogin(googleAuthProvider)}
          >
            Ingresar con Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
