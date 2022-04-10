const express = require('express');
const router = require('express').Router();
const actorsController = require('../controllers/actors.js')

router.get('/', actorsController.index)


module.exports = router;