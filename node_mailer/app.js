const express = require("express");
const app = express();
require("./db/conn");
const port = process.env.PORT || 4500;
const path = require("path");

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.send("Ok Home");
})

app.listen(port,()=>{
    console.log("Success");
})