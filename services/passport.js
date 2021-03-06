const passport=require('passport');
const keys=require('../config/keys');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');

const User=mongoose.model('user');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async(id, done)=>{
    const user=await User.findById(id)
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
    async (profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
        if(!existingUser){
            const newUser= await new User({
                googleId: profile.id,                  
            }).save();
            done(null, newUser);
        } else{
            done(null, existingUser);
        }
    }
));

