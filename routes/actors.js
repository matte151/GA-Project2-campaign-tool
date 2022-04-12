const express = require('express');
const router = require('express').Router();
const actorsController = require('../controllers/actors.js')

router.get('/', actorsController.index)
router.get('/new', actorsController.new)
router.get('/:id', actorsController.show)

router.post('/', actorsController.create)

module.exports = router;