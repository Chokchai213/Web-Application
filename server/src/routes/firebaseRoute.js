
const express = require('express');
const router = express.Router();
const firebaseauth = require('../controllers/firebaseAuth');

router.get('/test', (req, res) => {
    res.json({ message: 'This is a sample JSON response' });
});

router.post('/signup', firebaseauth.signup);

router.post('/signin', firebaseauth.signin);

module.exports = router;