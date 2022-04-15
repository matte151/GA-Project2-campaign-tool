const express = require('express');
const router = require('express').Router();
const abilitiesController = require('../controllers/abilities.js')


router.get('/', abilitiesController.index)
router.get('/new', abilitiesController.new)
router.get('/:id', abilitiesController.show)

router.post('/', abilitiesController.create)

router.put('/:id', abilitiesController.update)

router.delete('/:id', abilitiesController.delete)


module.exports = router;