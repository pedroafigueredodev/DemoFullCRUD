const userCtrl = {}


const userModel = require('../models/user.model')


userCtrl.getUsers = async (req, res) => {
    const users = await userModel.find()
    res.json(users)
   
}

userCtrl.createUser = async (req, res) => {
    const newUser =  new userModel(req.body);
    await newUser.save();
    res.json("OK");
    
}

userCtrl.getUser = async (req, res) => {
     const user = await  userModel.findById(req.params.id);
     res.json(user);
}

userCtrl.editUser = async (req, res) => {
    const result = await userModel.findByIdAndUpdate(req.params.id, req.body);
    
    res.json("OK");
}

userCtrl.deleteUser = async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id)
    res.json("OK");
}
 
module.exports = userCtrl;