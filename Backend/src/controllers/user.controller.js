const userModel = require("../model/user.model")

module.exports.createUserController = async (req, res) => {
    try {
        const {image, name, email, age, bio} = req.body
        const createUser = await userModel.create({
            image : image,
            name : name,
            email : email,
            age : age,
            bio : bio
        })

        res.send({createUser})
    } catch (error) {
        res.status(500).json({message : "internal server error"})
    }

}

module.exports.showUsersController = async (req, res) => {
    try {
        const showUsers = await userModel.find()

        res.send({showUsers})
    } catch (error) {
        res.status(500).json({message : "internal server error"})
    }
}

module.exports.updateUserController = async (req, res) => {
    try {
        const {id} = req.params
        const {image, name, email, age, bio} = req.body

        const updateUser = await userModel.findByIdAndUpdate(id,{
            image,
            name,
            email,
            age,
            bio
        }, {new : true})

        res.send({updateUser})

    } catch (error) {
        res.status(500).json({message : "internal server error"})
    }
}


module.exports.deleteController = async (req, res) => {
    try {
        const {id} = req.params
        const deleteUser = await userModel.findByIdAndDelete(id) 

        res.send({message : "User Deleted"}) 
    } catch (error) {
        res.status(500).json({message : "internal server error"})
    }
}