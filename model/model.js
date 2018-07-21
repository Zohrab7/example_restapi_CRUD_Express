const mongoose = require('mongoose');
let {db_connect} = require("./db_config");
const {books} = require("./Schemas/bookSchema");
const {genres} = require("./Schemas/genreSchema");
db_connect(mongoose);
module.exports = {
    books:mongoose.model("books", books),
    genre:mongoose.model("genres", genres),
    //get Books
    get getBooks() {
        return (callback, limit)=>{this.books.find(callback).limit(limit)};
    },
    //get Book by ID
    get getBookById(){
        return (id,callback)=>{this.books.findById(id,callback)};
    },
    //add Books
    get addBooks() {
        return (book,callback)=>{this.books.create(book,callback)};
    },
    //update Books
    get updateBooks(){
        return (id,book,options, callback) =>{
            let
                query={_id:id},
                update= {
                    title :book.title,
                    genre :book.genre,
                    description :book.description,
                    author :book.author,
                    publisher :book.publisher,
                    pages :book.pages,
                    image_url :book. image_url,
                    buy_url :book.buy_url
                };
            this.books.findOneAndUpdate(query,update,options,callback)
        };
    },
    //delete Books
    get removeBooks() {
        return (id,callback) =>{
            let query={_id:id};
            this.books.remove(query,callback)}
    },
    //get Genres
    get getGenres() {
        return (callback, limit) =>{this.genre.find(callback).limit(limit);}
    },
    //add Genres
    get addGenres() {
       return (genre, callback) =>{this.genre.create(genre,callback)}
    },
    //update Genres
   get updateGenres() {
        return (id,genre,options, callback) =>{
            let
                query={_id:id},
                update= {
                    name: genre.name
                };
            this.genre.findOneAndUpdate(query,update,options,callback)
        }

    },
    //delete Genres
   get removeGenres() {
       return (id,callback) =>{
           let query={_id:id};
           this.genre.remove(query,callback)
       }
    }
};
