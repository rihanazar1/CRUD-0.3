const express = require("express")
const userRoutes = express.Router()
const controllers = require("../controllers/user.controller")

userRoutes.post("/create", controllers.createUserController)

userRoutes.get("/showUsers", controllers.showUsersController)

userRoutes.put("/updateUser/:id", controllers.updateUserController)

userRoutes.delete("/deleteUser/:id", controllers.deleteController)

module.exports = userRoutes  