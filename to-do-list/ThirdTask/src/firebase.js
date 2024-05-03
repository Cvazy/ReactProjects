import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCyPOkPh2hb_0itXTIby4vW_IE4fa0rP6o",
	authDomain: "todoproject-3dcf1.firebaseapp.com",
	projectId: "todoproject-3dcf1",
	storageBucket: "todoproject-3dcf1.appspot.com",
	messagingSenderId: "1080653168679",
	appId: "1:1080653168679:web:ab341804411a28641b0e02",
	databaseURL:
		"https://todoproject-3dcf1-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
