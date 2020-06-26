const express=require('express');
const app=express();

require('./routes/authRoute')(app);
require('./routes/userRoute')(app);

app.get('/',(req, res)=>{
    res.send("Hello");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`); 
});