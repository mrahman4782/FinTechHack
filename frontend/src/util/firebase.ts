import firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
