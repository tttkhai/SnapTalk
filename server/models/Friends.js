const mongoose = require('mongoose');
const { Schema } =mongoose;

const friendsSchema=new Schema({
    googleId: String,
});

module.exports=friendsSchema;