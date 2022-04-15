const express = require('express');
const router = require('express').Router();
const abilitiesController = require('../controllers/abilities.js')
const isLoggedIn = require('../config/auth');


router.get('/', isLoggedIn, abilitiesController.index)
router.get('/new', isLoggedIn, abilitiesController.new)
router.get('/:id', isLoggedIn, abilitiesController.show)

router.post('/', isLoggedIn, abilitiesController.create)

router.put('/:id', isLoggedIn, abilitiesController.update)

router.delete('/:id', isLoggedIn, abilitiesController.delete)


module.exports = router;