const express = require('express');
const router = require('express').Router();
const orbsController = require('../controllers/orbs.js')

router.get('/', orbsController.index)
router.get('/new', orbsController.new)
router.get('/:id', orbsController.show)

router.post('/', orbsController.create)

router.put('/:id', orbsController.update)

router.delete('/:id', orbsController.delete)

// router.post('/actors/:id/orbs', orbsController.addToActor)

module.exports = router;