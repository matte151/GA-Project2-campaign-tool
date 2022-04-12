const express = require('express');
const router = require('express').Router();
const usersController = require('../controllers/users.js')

router.get('/', usersController.index)


module.exports = router;