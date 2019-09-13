const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = 3006;

// define middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// static assets
if (process.env.NODE_ENV === "production"){
    app.use(express.static(""));
}
// add routes
app.use(routes);

// connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/memorygame");

// start server
app.listen(PORT, function(){
    console.log('Server is listening on PORT!');
})