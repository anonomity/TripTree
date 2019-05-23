import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBS9BUgNyS4jGKZEpeKArAnFPSOs5cpTCw",
    authDomain: "triptree-39cc6.firebaseapp.com",
    databaseURL: "https://triptree-39cc6.firebaseio.com",
    projectId: "triptree-39cc6",
    storageBucket: "triptree-39cc6.appspot.com",
    messagingSenderId: "839167947552",
    appId: "1:839167947552:web:6e6988f40f35ab53"
  };

  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  
  export default firebase;