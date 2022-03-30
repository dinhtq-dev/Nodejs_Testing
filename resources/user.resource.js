const User =  require('../models/user.model')

module.exports.index = async function(_, res) {
    const user = await User.find({name: /trandinh/});
    return res.status(200).json({user})
}

module.exports.create = async function(req, res) {
    const userExist = await User.findOne({email: req.body.email});
    if(userExist) {
        return res.status(200).json({
            message: "user exist",
            user: userExist
        })
    }
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        age: req.body.age
    })
    
    try {
        await user.save();
        return res.status(201).json({
            message: "Create successfully"
        })
    } catch (error) {
        return res.status(500).json({error})
    }
}
module.exports.update = async function(req, res) {
    try {
        await User.updateOne({_id: req.params.id}, {$set: req.body})
        return res.status(200).json({
            message: "update successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports.delete = async function(req, res) {
    try {
        await User.findByIdAndRemove({_id: req.params.id});
        return res.status(204).json({
            message: "delete successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

