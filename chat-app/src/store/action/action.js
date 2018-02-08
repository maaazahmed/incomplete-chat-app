import firebase from "firebase"
import history from "../../History"
import ActionTypes from "../constant/constant"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCBhBLVzos2pixaoTA6Y5VQ7c-dcXAIs3c",
    authDomain: "maazahmed-48453.firebaseapp.com",
    databaseURL: "https://maazahmed-48453.firebaseio.com",
    projectId: "maazahmed-48453",
    storageBucket: "maazahmed-48453.appspot.com",
    messagingSenderId: "192331221176"
  };
  firebase.initializeApp(config);

  let database = firebase.database().ref("/")

/********************************/ //=> SignUp Action
export function signupAction(user) {
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


/********************************/ //=> SignIn Action
  export function logInAction(user) {
    //   console.log(user)
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('users/' + res.uid).once('value', function (snapshot) {
                history.push("/MainChatComponent")
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
            console.log(error);
        });
      }
  }

/********************************/ //=> User List Action
export const renderUserList = (alls)=>{
    return dispatch => {       
        dispatch ({
            type:ActionTypes.ALLUSERS,
            payload:alls
        })
    }
}

export const userIDs = (IDs)=>{
    return dispatch => {       
        dispatch ({
            type:ActionTypes.CHATERS,
            payload:IDs
        })
    }
}
  
export const senMsgOnFirebase = (mssg)=>{
    // console.log(mssg)
    return dispatch => {       
        database.child('massege').push(mssg)
    }
}

export const renderMsgsAction = (msgData)=>{
    // console.log(msgData)
    return dispatch => {       
        dispatch ({
            type:ActionTypes.MESSAGES,
            payload:msgData
        })
    }
}

export const MsgsIDAction = (msgID)=>{
    // console.log(msgID)
    return dispatch => {       
        dispatch ({
            type:ActionTypes.LAST_MESSAGE_ID,
            payload:msgID
        })
    }
}

export const flageAction = (obj)=>{
    // console.log(obj)
    return dispatch => {       
        dispatch ({
            type:ActionTypes.FLAGE,
            payload:obj
        })
    }
}

export const cecaleAction = (fa)=>{
    // console.log(obj)
    return dispatch => {       
        dispatch ({
            type:ActionTypes.CANCEL,
            payload:fa
        })
    }
}

