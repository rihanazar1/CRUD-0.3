require("dotenv").config()
const app = require("./src/app")
const connect = require("./src/DB/db")
connect()


app.listen(process.env.PORT, () =>{
    console.log("Server is running on " + process.env.PORT)
})
