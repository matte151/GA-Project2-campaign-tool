const express = require('express');
const router = require('express').Router();
const usersController = require('../controllers/users.js')
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, usersController.index)

router.put('/:id', isLoggedIn, usersController.update)

router.delete('/:id', isLoggedIn, usersController.delete)

module.exports = router;