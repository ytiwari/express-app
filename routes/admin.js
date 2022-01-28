const path = require('path');
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get('/add-product', (req, res, next)=>{    
    res.render(path.join(rootDir, 'views','add-product'), {title: 'Add Product'})    
})
  
router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;