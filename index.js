const mongoose = require('mongoose');
const express = require('express');
const app = require("./app.js")
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log("Connection successfully");
    })
    .catch(() => {
        console.log("Connection fail");
    });

app.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
    console.log("\nhttp://localhost:3000/");
});
