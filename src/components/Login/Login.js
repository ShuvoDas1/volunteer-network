import React, { useContext} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fireConfig.js'
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    if(firebase.apps.length == 0){
        firebase.initializeApp(firebaseConfig)
    }
    
    let history = useHistory();
    let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();

    
    const googleSignUp = (e) => {   
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName,email} = result.user;
            const newUser = {name:displayName,email:email}
            setLoggedInUser(newUser);
            history.replace(from)
          })
          .catch(error => {
            
            console.log(error.message);
           
          });
          e.preventDefault();
    }
    
    const style = {
      width: '500px',
      height: '150px',
      margin: 'auto',
      padding: '20px'
    }

    return (
      <>
        <div style={style}>
            <div>
              <h3>Login</h3>
              <hr/>
              <button className='btn btn-primary' onClick={googleSignUp}>Login With Google</button>
            </div>
        </div>
       </> 
    );
};

export default Login;