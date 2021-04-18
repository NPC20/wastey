import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGE_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
};

console.log(process.env.API_KEY)
let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();

}

// initialize fire base
export const db = firebase.firestore();
export const auth = app.auth();
