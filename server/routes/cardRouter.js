const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.post('/add', cardController.createCard, (req, res) => res.status(200).json('true'));

router.get('/', cardController.allCards, (req, res) => res.status(200).json(res.locals.result));

router.post('/delete', cardController.deleteCard, (req, res) => res.status(200).json('true'));

module.exports = router;
