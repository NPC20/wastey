import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAcxB27WsdrYWFy_0Rbwp5AKqcuCPDwKWE",
	authDomain: "namepending-cb301.firebaseapp.com",
	projectId: "namepending-cb301",
	storageBucket: "namepending-cb301.appspot.com",
	messagingSenderId: "227215591536",
	appId: "1:227215591536:web:14599995a2678b79778cb5",
	measurementId: "G-DZYJC3XSM7"
  };

console.log(process.env.NEXT_PUBLIC_API_KEY)
export let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();

}

// initialize fire base
export const db = firebase.firestore();
export const auth = app.auth;

