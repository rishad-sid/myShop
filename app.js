const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "./", "views", "error.html"));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
