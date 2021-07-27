import React, { useEffect, useState } from 'react'
import './navbar.css';

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        setLoggedIn(localStorage.getItem("loggedIn"));
    }, [localStorage.getItem("loggedIn")])

    return (
        <div className="Navbar">
            <a href="/">Home</a>
            {loggedIn ? (
                <>
                    <a href="/upload">Upload</a>
                    <a href="/profile">Profile</a>
                </> 
            ) : (
                <>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </>
            )} 
        </div>
    )
}

export default NavBar
