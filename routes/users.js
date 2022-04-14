const express = require('express');
const router = require('express').Router();
const usersController = require('../controllers/users.js')

router.get('/', usersController.index)

router.put('/:id', usersController.update)

router.delete('/:id', usersController.delete)

module.exports = router;