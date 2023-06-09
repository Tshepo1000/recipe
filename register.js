import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";


import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYqEdnKNVUynyv3bOUc7e1TTxqZ7SckWg",
  authDomain: "the-recipe-ec815.firebaseapp.com",
  projectId: "the-recipe-ec815",
  storageBucket: "the-recipe-ec815.appspot.com",
  messagingSenderId: "161597718151",
  appId: "1:161597718151:web:fe8bd8e4ba2dfe5481c222",
  measurementId: "G-YJF90WY8EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

const mainDiv = document.getElementById("main");
const createAcct = document.getElementById("create-acct");

const returnbtn = document.getElementById("return-btn");
const signup = document.getElementById("sign-up");

signup.addEventListener("click", () => {
    createAcct.style.display = "block"; 
    mainDiv.style.display = "none";  
});

returnbtn.addEventListener("click", () => {
    mainDiv.style.display = "block";
    createAcct.style.display = "none";
});

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const confirmSignupPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

var email, 
    password, 
    signupEmail, 
    signupPassword, 
    confirmSignupEmail, 
    confirmSignupPassword;

createacctbtn.addEventListener("click", () => {
    var isVerified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if(signupEmail != confirmSignupEmail){
        window.alert("Email fields do not match. Try again.");
        isVerified = false;
    }

    signupPassword = signupPasswordIn.value;
    confirmSignupPassword = confirmSignupPasswordIn.value;
    if(signupPassword != confirmSignupPassword){
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }

    if(
        signupEmail == null ||
        confirmSignupEmail == null ||
        signupPassword == null ||
        confirmSignupPassword == null
    ){
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }

    if(isVerified == true){
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(() =>{
        window.alert("Successfully Created Account");
        window.location = "./recipe.html";

    })
    .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);

        //window.alert("Error Occurred. Try Again");
    });
}
});

submitButton.addEventListener("click", () => {
    email = emailInput.value;
    password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password).then(() => {
        window.alert("Success! Welcome Back.");
        window.location = "./recipe.html";
    }).catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
    });
});

