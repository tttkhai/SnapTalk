const express=require('express');
const app=express();
const passport=require('passport');

app.use(passport.initialize());
app.use(passport.session());
require('./services/passport');
require('./routes/authRoute')(app);
require('./routes/userRoute')(app);


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`); 
});