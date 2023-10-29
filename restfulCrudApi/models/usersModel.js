const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "Please enter your first name."]
    },
    
    lastName: {
        type: String,
        require: [true, "Please enter your last name."]
    },
    
    email: {
        type: String,
        require: [true, "Please enter your email."]
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;