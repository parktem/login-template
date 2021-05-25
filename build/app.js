"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var Routes = require("./routes/Routes");
var middleware_1 = require("./security/middleware");
var body_parser_1 = require("body-parser");
var app = express();
app.use(cors());
app.use(body_parser_1.json());
app.use(middleware_1.middleware);
app.use(Routes);
app.listen(process.env.PORT || 3001, function () {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true }).then(function (connection) {
        if (connection) {
            console.log('Node is ready and connected to MongoDB');
        }
    });
});
