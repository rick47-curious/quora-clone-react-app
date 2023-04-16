const express = require('express');
const PORT = 3001;
let app = express();

app.get('/api',(req,res,next)=>{
    res.send("Welcome USER");
    next();
})
app.listen(PORT,()=>{
    console.log(`App is listening at : ${PORT}`)
})