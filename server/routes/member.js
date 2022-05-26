const express = require('express');
const router = express.Router();
const memberControllers = require('../controllers/memberController')

// API/member

router.post('/', memberControllers.addMember)
router.get('/', memberControllers.getMember)
router.post('/login', memberControllers.login)

module.exports = router;