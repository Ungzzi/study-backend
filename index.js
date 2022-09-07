const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = require("./routes");
app.use('/visitor', router);

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});