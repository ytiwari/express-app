const path = require("path");

const express = require('express');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
const rootDir = require("./util/path");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/admin", adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) =>{
    res.status(404).render(path.join(rootDir, 'views', '404'), {title:404})
})



app.listen(3000);