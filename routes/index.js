var express = require('express');
const app = require('../app');
var router = express.Router();

const rooms = { name: {} };

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Webtech Game', rooms: rooms });
});
// GET Room
router.get('/:room', (req, res) => {
    res.render('room', { roomName: req.params.room });
});

module.exports = router;
