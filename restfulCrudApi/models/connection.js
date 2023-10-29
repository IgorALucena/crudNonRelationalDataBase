const mongoose = require('mongoose');
const url = "mongodb+srv://admin:@restfulcrudapi.rt9rnov.mongodb.net/nodeApi?retryWrites=true&w=majority";
const connection = mongoose.connect(url)
.then(()=>{
    console.log("MongoDB connection established!");
}).catch((error)=>{
    console.log(error);
});

module.exports = connection;