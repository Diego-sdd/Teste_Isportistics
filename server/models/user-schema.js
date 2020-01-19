const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    nm_name: {
        type: String
    },
    ds_surname: {
        type: String
    },
    qt_participation: {
        type: String
    },

}, {
    collection: 'users'
}
)


module.exports = mongoose.model('User', userSchema)