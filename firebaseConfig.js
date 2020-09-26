
import * as firebase from "firebase";
import "firebase/auth";

// import {
//   REACT_APPFIREBASE_API_KEY, 
//   REACT_APPFIREBASE_AUTH_DOMAIN,
//   REACT_APPFIREBASE_DATABASE_URL,
//   REACT_APPFIREBASE_PROJECT_ID,
//   REACT_APPFIREBASE_STORAGE_BUCKET,
//   REACT_APPFIREBASE_MESSAGING_SENDER_ID,
//   REACT_APPFIREBASE_APP_ID,


// } from 
//import dataConfig from './dataConfig'


const config =  {
        apiKey: process.env.NEXT_PUBLIC_APPFIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_APPFIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_APPFIREBASE_DATABASE_URL,
        projectId: process.env.NEXT_PUBLIC_APPFIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_APPFIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_APPFIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APPFIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_APPFIREBASE_MEASUREMENT_ID
      }

console.log(config, 'config data')
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();