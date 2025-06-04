const express = require("express")
const app = express()
const cors = require("cors")
const userRoutes = require("../src/routes/user.route")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/user", userRoutes)

module.exports = app