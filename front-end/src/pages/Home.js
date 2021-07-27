import React, {useEffect} from 'react'

function Home() {
    useEffect(()=>{
        if(!localStorage.getItem("loggedIn")){
            localStorage.setItem("loggedIn",false)
        }
    },[]);
    return (
        <div>
            <h1> Hola Home</h1>
        </div>
    )
}

export default Home
