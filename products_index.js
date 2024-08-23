const mongoose = require("mongoose");
const express = require("express");
const app = require("./app.js");
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/")
    .then(() => {
        console.log("Successfull");
    })
    .catch(() => {
        console.log("Unsuccessfull");
    })
const port = 3000;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
    console.log(`\nhttp://localhost:${port}/`);
});
