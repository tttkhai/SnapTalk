const express=require('express');
const app=express();

const PORT = process.env.PORT || 4000;
app.listen(()=>{
    console.log(`App is listening on port ${PORT}`); 
});