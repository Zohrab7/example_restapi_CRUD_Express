const {Schema} = require("mongoose");
module.exports.books = new Schema({
    title: {type: String},
    genre: {type: String},
    description: {type: String},
    author: {type: String},
    publisher: {type: String},
    pages: {type: String},
    image_url: {type: String},
    buy_url: {type: String},
    create_date: {
        type: Date,
        default: Date.now
    }
});



