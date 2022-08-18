import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Login.css'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import Admin from '../Admin/Admin';
const firebaseConfig = {
    apiKey: "AIzaSyDBkl4c3wDkjTuBKWE7QVHbaIqNTAs0yPI",
    authDomain: "duck-meet.firebaseapp.com",
    projectId: "duck-meet",
    storageBucket: "duck-meet.appspot.com",
    messagingSenderId: "125622903346",
    appId: "1:125622903346:web:cf13df497c70a1fd4b522b"
};

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({})
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSignInWithGooglePopUp = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                setUser(result);
                setLoggedInUser(user)
                navigate(location.state.from);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className="container">
            <Navbar></Navbar>
            {loggedInUser.email ? <Admin/> : 
            <div className="text-center mt-5 ">
                <div className="login-container p-3 border border-success">
                    <h5 className="pb-2">Login</h5>
                    <button onClick={() => handleSignInWithGooglePopUp()} type="button" className="btn btn-primary">Continue with Google</button>
                </div>
            </div>}
        </div>
    );
};

export default Login;