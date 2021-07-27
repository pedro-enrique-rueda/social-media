const express = require('express');
const router = express.Router()

const db = require('../config/db');

router.post("/register", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO Users(username, password) VALUES(?,?);",[username,password],
    (err,results)=>{
        console.log(err);
        res.send(results);
    });
});

router.post("/login", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM Users WHERE username = ?",username,
    (err,results)=>{
        if(err){
            console.log(err);
        }
        if(results.length > 0){
            if(password == results[0].password){
                // res.send('you are logged in');
                // vamos a responder conun json el cual contiene un objeto
                // con las propiedades loogedIn y username
                res.json({loggedIn: true, username: username});
            }else{
                res.json({
                    loggedIn: false, 
                    message:"Wrong username/password combo!"
                });
            }
        }else{
            res.json({
                loggedIn: false, 
                message:"Username doesn't exist!"
            });
        }        
    });
});

module.exports = router;