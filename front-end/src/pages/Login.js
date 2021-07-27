import React, {useState} from 'react'
import './login.css';
import Axios from 'axios';

import {useHistory} from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    let history = useHistory()

    const login = () => {
        Axios.post("http://localhost:3001/user/login",{
                username: username, 
                password: password
            }).then((response)=>{
            // console.log(response);
            if(response.data.loggedIn){
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username",response.data.username);
                history.push("/");
            }else{
                setErrorMessage(response.data.message);
            }
        });
    }
    
    return (
        <div className="Login">
            <h1>Login</h1>
            <div className="LoginForm">
                <input type="text" placeholder="Username ..."  
                    onChange={(event)=>{
                        setUsername(event.target.value)
                    }}

                />
                <input type="password" placeholder="Password" 
                    onChange={(event)=>{
                        setPassword(event.target.value)
                    }}  
                    
                />
                <button onClick={login}>Login</button>
                <h5>{errorMessage}</h5>
            </div>

        </div>
    )
}

export default Login
