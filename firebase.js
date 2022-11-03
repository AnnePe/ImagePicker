import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyBYTdXVSbFnLjAyz6WHsbRA8BraT5drP6Q",
    authDomain: "ostoslista-bdc5d.firebaseapp.com",  
    databaseURL: "https://ostoslista-bdc5d-default-rtdb.firebaseio.com",  
    projectId: "ostoslista-bdc5d",  
    storageBucket: "ostoslista-bdc5d.appspot.com",  
    messagingSenderId: "992337539250",  
    appId: "1:992337539250:web:82f25aea6d220720e399ab",  
    measurementId: "G-JP53XTCR9L"
  
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);

export {app, firebase}