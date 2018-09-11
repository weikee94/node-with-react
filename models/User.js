// This is the model class for user

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: {
        type: Number, 
        default: 0
    }
})


// a new collection call users, second is 
// the one we defined above
// model two arguments means load something
// model one arguments means pull something
mongoose.model('users', userSchema);