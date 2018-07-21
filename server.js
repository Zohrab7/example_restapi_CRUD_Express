let
    {
        getBooks, getBookById, addBooks, removeBooks, updateBooks,
        getGenres, addGenres, removeGenres, updateGenres
    }
        = require("./model/model");
const path = require("path");
let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");

let
    app = express(),
    port = process.env.port || 3002,
    router = express.Router();

//post

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(morgan("dev"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

router.get("/", (req, res) => {
    res.send("Please use api/genres or api/books");
});
router.get("/api/", (req, res) => {
    res.status(200).json({data: "Api OK"});
});
router.get("/api/books", (req, res) => {
    getBooks((err, books) => {
        if (err) {
            throw err;
        } else {
            res.json(books);
        }
    })
});
router.post("/api/books", (req, res) => {
    let book = req.body;
    addBooks(book, (err, book) => {
        if (err) {
            throw err;
        } else {
            res.json(book);
        }
    })
});
router.get("/api/books/:_id", (req, res) => {
    getBookById(req.params._id, (err, book) => {
        if (err) {
            throw err;
        } else {
            res.json(book);
        }
    })
});
router.put("/api/books/:_id", (req, res) => {
    let
        id = req.params._id,
        book = req.body;
    updateBooks(id, book, {}, (err, book) => {
        if (err) {
            throw err;
        } else {
            res.json(book);
        }
    })
});
router.delete("/api/books/:_id", (req, res) => {
    let id = req.params._id;
    removeBooks(id, (err, book) => {
        if (err) {
            throw err;
        } else {
            res.json(book);
        }
    })
});
router.get("/api/genres", (req, res) => {
    getGenres((err, genres) => {
        if (err) {
            throw err;
        } else {
            res.json(genres);
        }
    })

});
router.post("/api/genres", (req, res) => {
    let genre = req.body;
    addGenres(genre, (err, genre) => {
        if (err) {
            throw err;
        } else {
            res.json(genre);
        }
    })
});
router.put("/api/genres/:_id", (req, res) => {
    let
        id = req.params._id,
        genre = req.body;
    updateGenres(id, genre, {}, (err, genre) => {
        if (err) {
            throw err;
        } else {
            res.json(genre);
        }
    })
});
router.delete("/api/genres/:_id", (req, res) => {
    let id = req.params._id;
    removeGenres(id, (err, genre) => {
        if (err) {
            throw err;
        } else {
            res.json(genre);
        }
    })
});
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: ' '});
});
/**/
app.use("/", router);
/*Listening to port 3002*/
app.listen(port, () => console.log(`Server is Running... on the port ${port}`));