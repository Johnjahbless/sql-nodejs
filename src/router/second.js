const express = require('express');
const path = require('path');
const db = require('../config/config');

const router = express.Router();


router.get('/second', (req, res) =>  res.send("Coming soon"))





module.exports = router;