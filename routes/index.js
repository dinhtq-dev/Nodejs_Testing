const userRoute  = require('./user.route')
module.exports.routes = function (app) {
    app.use('/user', userRoute )
}