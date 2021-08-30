const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { get404 } = require("./controllers/error");

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
