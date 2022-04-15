const express = require('express');
const router = require('express').Router();
const orbsController = require('../controllers/orbs.js')
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, orbsController.index)
router.get('/new', isLoggedIn, orbsController.new)
router.get('/:id', isLoggedIn, orbsController.show)

router.post('/', isLoggedIn, orbsController.create)

router.put('/:id', isLoggedIn, orbsController.update)

router.delete('/:id', isLoggedIn, orbsController.delete)

// router.post('/actors/:id/orbs', orbsController.addToActor)

module.exports = router;