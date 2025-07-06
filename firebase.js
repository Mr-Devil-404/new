// Import Firebase and initialize
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-HnCR1ls6snx9AcWSfqpIDClBKNymNx8",
  authDomain: "mrdevilex-f383c.firebaseapp.com",
  projectId: "mrdevilex-f383c",
  storageBucket: "mrdevilex-f383c.appspot.com",
  messagingSenderId: "705558182182",
  appId: "1:705558182182:web:c0283ec4daa7850f88e9e7",
  measurementId: "G-GDF4SYLJ6Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Signup Successful"))
    .catch(e => alert(e.message));
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login Successful"))
    .catch(e => alert(e.message));
};
