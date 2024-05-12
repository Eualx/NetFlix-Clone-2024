// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC6hrcRbosppCMG0jZaWtFRWbXuUGooQHU",
  authDomain: "netflix-clone-b607b.firebaseapp.com",
  projectId: "netflix-clone-b607b",
  storageBucket: "netflix-clone-b607b.appspot.com",
  messagingSenderId: "547743603363",
  appId: "1:547743603363:web:9b038f1f1231eac94a7d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name , email, password)=>{
try{
   const res= await createUserWithEmailAndPassword (auth, email, password);
   const user = res.user
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name, 
    authProvider:"local",
    email,
   })
}  catch(error){
console.log(error)
toast.error(error.code.split('/')[1].split('-').join(""))
}
}
const login= async(email,password)=>{
    try {
await signInWithEmailAndPassword(auth,email,password);
    } catch(error){
console.log(error);
toast.error(error.code.split('/')[1].split('-').join(""))
    }
}

const logout= ()=>{
signOut(auth)
    } 
export {auth, db, login, signup, logout}