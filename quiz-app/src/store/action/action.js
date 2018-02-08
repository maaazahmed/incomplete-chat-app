import ActionTypes from "../constant/constant"
import firebase from "firebase"
import history  from "../../History"


/**************************************************/ 
/**************************************************/ 
/**************************************************/ 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCjnOnGjin0ax0pvx_aWPwr3rXyrcwJK4k",
    authDomain: "polling-application-9938a.firebaseapp.com",
    databaseURL: "https://polling-application-9938a.firebaseio.com",
    projectId: "polling-application-9938a",
    storageBucket: "polling-application-9938a.appspot.com",
    messagingSenderId: "1008180650619"
  };
  firebase.initializeApp(config);
/**************************************************/ 
/**************************************************/ 
/**************************************************/

let database = firebase.database().ref("/")
export const sing_in_Action = (user)=>{
    console.log(user)
    return dispatch => {
        console.log('user ===>>>', user.password);
        firebase.auth().
        createUserWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('users/' + res.uid).set(user)
                .then(function () {
                    history.push("./login")
                })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
      } 
}

export const log_in_Action = (user)=>{
    // console.log(user)
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('users/' + res.uid).once('value', function (snapshot) {
                history.push("/Quiz_component")
            })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            // console.log(error);
        });
      }
}