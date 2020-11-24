var express = require('express');
const app = require('../app');
var router = express.Router();

const rooms = {};

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('room', { title: 'Webtech Game', rooms: rooms });
});
// GET Room
// router.get('/:room', (req, res) => {
//     if (rooms[req.body.room] == null) {
//         return res.redirect('/');
//     }
//     res.render('room', { roomName: req.params.room });
// });
// POST Room
// router.post('/room', (req, res) => {
//     if (rooms[req.body.room] != null) {
//         return res.redirect('/');
//     }
//     rooms[req.body.room] = { users: {} };
//     res.redirect(req.body.room);
//     // send message on socket
//     io.emit('room-created', req.body.room);
// });

module.exports = router;
