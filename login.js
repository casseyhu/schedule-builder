// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAo4APmc3x_nmfL7WwdgnETR9l_8QdZ8Ok",
authDomain: "schedulebuilder-4382d.firebaseapp.com",
databaseURL: "https://schedulebuilder-4382d.firebaseio.com",
projectId: "schedulebuilder-4382d",
storageBucket: "schedulebuilder-4382d.appspot.com",
messagingSenderId: "623968118832",
appId: "1:623968118832:web:4007445732eaea791a25f5",
measurementId: "G-JMHV4RMXY9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function signup() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
        var errorMessage = error.message;
        alert("Error: " + errorMessage);
      });
      console.log("signed up");
}

function login() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
        var errorMessage = error.message;
        alert("Error: " + errorMessage);
      });
      console.log("logged in");
}

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("logged out");
      }).catch(function(error) {
        // An error happened.
        console.log("error logging out");
      });
}


