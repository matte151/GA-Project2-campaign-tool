const express = require('express');
const router = require('express').Router();
const actorsController = require('../controllers/actors.js')
const isLoggedIn = require('../config/auth');

router.get('/', actorsController.index)
router.get('/new', isLoggedIn, actorsController.new)
router.get('/:id', isLoggedIn, actorsController.show)

router.post('/', isLoggedIn, actorsController.create)

router.put('/:id', isLoggedIn, actorsController.update)

router.delete('/:id', isLoggedIn, actorsController.delete)

router.post('/:id/orbs', isLoggedIn, actorsController.addOrb)
router.post('/:id/orbStats', isLoggedIn, actorsController.addOrbStats)

module.exports = router;