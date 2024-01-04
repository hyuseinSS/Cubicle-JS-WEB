const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/Cubicle';


exports.initializeDatabase = (app) => mongoose.connect(url, {
    family: 4
})
    .then(() => {
        console.log('Database is connected');
    })
    .then(() => {
        app.listen(5000, () => console.log("Server started on port 5000"))
    })
    .catch(err => {
        console.log(`DB/Server Error: ${err}`);
    })