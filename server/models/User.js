const mongoose=require('mongoose');
const { Schema } = mongoose;
const friendsSchema=require('./Friends');


const userSchema=new Schema({
    id: String,
    firstName: String,
    lastName: String,
    nickName: String,
    phoneNumber: String,
    address: String,
    roles: {type: String, default: 'user'},
    // _friends:[friendsSchema],
    dateJoined: Date.now()
});

mongoose.model('user', userSchema);