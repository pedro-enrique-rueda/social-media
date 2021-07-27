const express = require('express');
const app = express();
const port = 3001;
// for cors
const cors = require('cors');
app.use(cors());
app.use(express.json());


const userRoute = require('./routes/User')
app.use('/user', userRoute);

const uploadRoute = require('./routes/Upload')
app.use('/upload', uploadRoute);

app.listen(port, (req,res)=>{
    console.log("server running...");
});

