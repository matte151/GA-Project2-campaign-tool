const express = require('express');
const router = require('express').Router();
const abilitiesController = require('../controllers/abilities.js')

router.get('/', abilitiesController.index)




module.exports = router;