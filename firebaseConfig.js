
import * as firebase from "firebase";
import "firebase/auth";
//import dataConfig from './dataConfig'

const config =  {
        apiKey: "AIzaSyDI25PC6vO4bNG32XaDLVfYBLEpEvqu540",
        authDomain: "plataforma-c7f7d.firebaseapp.com",
        databaseURL: "https://plataforma-c7f7d.firebaseio.com",
        projectId: "plataforma-c7f7d",
        storageBucket: "plataforma-c7f7d.appspot.com",
        messagingSenderId: "274231012652",
        appId: "1:274231012652:web:53a50fba8c4d9b03dad089",
        measurementId: "G-2Y6WB023Q8"
      }

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();