const express = require('express');
const router = require('express').Router();
const orbsController = require('../controllers/orbs.js')

router.get('/', orbsController.index)


module.exports = router;