// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyDpcTjAE5T_1fSJxZidNE_-Fg9Bw3p_cJA",
    authDomain: "dkadventuregame.firebaseapp.com",
    projectId: "dkadventuregame",
    storageBucket: "dkadventuregame.appspot.com",
    messagingSenderId: "592836879575",
    appId: "1:592836879575:web:f5f5a70bfba1ad1c23bc92",
    measurementId: "G-0J8BQLMEES"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();

    }

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');

  }
   
  export default Firebase;