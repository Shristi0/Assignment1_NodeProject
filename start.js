const mongoose = require('mongoose');
const port = 8000;


(async ()=>{
    try {
        await mongoose.connect('mongodb://localhost/employee', {useNewUrlParser: true});
        console.log("Connected to MongoDB Successfully.")
    } catch (error) {
        console.log(`Error Connecting to MongoDB. Reason is: ${error}`)
    }
})();

require('./index.js');