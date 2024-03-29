import React from "react";
import {GoogleOutlined, FacebookOutlined} from "@ant-design/icons";
import "firebase/app"

import "firebase/app"
import {auth} from "../firebase"
import firebase from "firebase/app";

const Login = () =>{
    return(
        <div className="login-page">
            <div className="login-card">
                <h2>Welcome to Jiggle</h2>
                <div className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined/> Sign in with Google
                </div>
                <br/><br/>
                {/* <div className="login-button facebook">
                    <FacebookOutlined/> Sign in with Facebook
                </div> */}
            </div>
        </div>
    )
}

export default Login