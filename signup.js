// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcGmbeJv45WePKdx-CpWo17BX3KK9Xmgs",
  authDomain: "my-final-84a3e.firebaseapp.com",
  projectId: "my-final-84a3e",
  storageBucket: "my-final-84a3e.appspot.com",
  messagingSenderId: "505192800708",
  appId: "1:505192800708:web:ffd9f2be6aff79f2f68491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function(event){
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Creating Success, Please Login")
        window.location.href = "login.html" ;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });

})