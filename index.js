// const app = require('./app')
const mongoose = require('mongoose');
const express = require('express')
// const MongoClient = require('mongodb').MongoClient
const app = express();
app.use(express.json());
// MongoClient.connect('mongodb://localhost:27017/')
//     .then(() =>
//         {console.log("Connection successfully")}
//     )
//     .catch(() => {
//         console.log("Connection fail")
//     })

mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log("Connection successfully")
    }
    )
    .catch(() => {
        console.log("Connection fail")
    })

// Định nghĩa Document
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    fullname: {
        type: String,
        required: [true, "fullname is required"],
    }
});

// Tạo Model
const User = mongoose.model('User', userSchema);

// Tạo API để call
app.post('/users', (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user
        .save()
        .then(() => {
            res.status(200).json({
                message: "User created successfully",
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Unsuccessfully",
                error: err.message,
            })
        });
});

// api lấy thông tin user
app.get('/users', (req, res) => {
    var users = User.find()
                .then((user) => {
                    res.status(200).json({
                        message: "Successful",
                        data: user
                    });
                }).catch((err) => {
                res.status(500).json({
                    message: "Unsuccessful",
                    data: err
                });
    })
});


{
    app.listen(9000, () => {
        console.log(`Server listening on ${9000}`)
        console.log("\nhttp://localhost:9000/")
    })

};