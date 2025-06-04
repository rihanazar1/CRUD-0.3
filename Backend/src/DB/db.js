const mongoose = require("mongoose")
require("dotenv").config()

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)

    .then(() => {
        console.log("database connected successfully")
    })

    .catch((err)=> {
        console.log("connection denied")
    })
}

module.exports = connect