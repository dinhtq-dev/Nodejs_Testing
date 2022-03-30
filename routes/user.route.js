const express = require('express');
const user_router =  express.Router()
const controler = require('../controlers/user.controler')

user_router.get('/', controler.index)
user_router.post('/create', controler.create)
user_router.put('/update/:id', controler.update)
user_router.delete('/delete/:id', controler.delete)
user_router.get('/:id', controler.view)

module.exports = user_router