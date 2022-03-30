
const User =  require('../models/user.model')
const userResource = require('../resources/user.resource')

module.exports.index = async function(_, res) {
    userResource.index(_, res)
}
module.exports.create = async function(req, res) {
    userResource.create(req, res)
}
module.exports.view = async function(req, res) {
    const user = await User.find({"_id" : req.params.id})
    if(user) {
        return res.status(200).json({user})
    }
}
module.exports.update = async function(req, res) {
    userResource.update(req, res)
}
module.exports.delete = async function(req, res) {
    userResource.delete(req, res)
}
