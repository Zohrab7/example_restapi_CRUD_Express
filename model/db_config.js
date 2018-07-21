const dbname = "bookstore";
const url = `mongodb://localhost:27017/${dbname}`;
module.exports.db_connect = mongoose => {
    mongoose.connection.on('connected', function () {
        console.log("connected");
    }).on('error', function (e) {
        console.log(`error ${e}`);
    }).on('disconnected', function () {
        console.log("disconnected");
    });
    mongoose.connect(url, err => {
        if (err) throw err;
        console.log(`Database >${dbname}< has been created!`);
    });
};