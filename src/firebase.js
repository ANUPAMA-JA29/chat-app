// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX1JVgp-LNn5wmTIodQNInSH1MD6SLsH8",
  authDomain: "chatapp-787c9.firebaseapp.com",
  projectId: "chatapp-787c9",
  storageBucket: "chatapp-787c9.appspot.com",
  messagingSenderId: "124271597099",
  appId: "1:124271597099:web:b29c22db89a5fca2fdbc6e",
  measurementId: "G-LXJQLBE6M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
