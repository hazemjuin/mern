const mongoose = require('mongoose');



module.exports = (DATABASE) => {
    mongoose.connect(`mongodb://localhost/${DATABASE}`)
        .then(() => console.log(`connected to ${DATABASE} db `))
        .catch(err => console.log(`⚠⚠⚠ cannot connect to ${DATABASE}`, err))

}