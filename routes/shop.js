const path = require("path");

const express = require("express");

const route = express.Router();
const rootDir = require("../util/path");

route.get("/download", (req, res, next) =>{
    res.download('public/download.jfif');
});
route.get("/", (req, res, next) =>{
    res.render(path.join(rootDir, 'views', 'shop'), {title:'Shop'});
});


module.exports = route;