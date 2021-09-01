const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://PS-Test:robot2513@test.uxljl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');