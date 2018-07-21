const {Schema} = require("mongoose");
module.exports.genres = new Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});