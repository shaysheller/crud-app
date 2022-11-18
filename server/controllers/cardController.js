const { DatabaseError } = require('pg');
const db = require('../models/projectModels.js');

const cardController = {};

cardController.createCard = async (req, res, next) => {
  const values = [req.body.word, req.body.definition];

  const queryString = 'INSERT INTO cards (word, definition) VALUES ($1, $2);';

  try {
    await db.query(queryString, values);
    return next();
  } catch (e) {
    return next({
      log: 'Express error handler caught create card query error',
      status: 400,
      message: { err: 'An error occured adding card' },
    });
  }
};

cardController.allCards = async (req, res, next) => {
  const queryString = 'SELECT * FROM cards;';

  try {
    const data = await db.query(queryString);
    console.log('success');
    res.locals.result = data.rows;
    return next();
  } catch (e) {
    return next({
      log: 'Express error handler caught get all cards query error',
      status: 400,
      message: { err: 'An error occured fetching cards' },
    });
  }
};

cardController.deleteCard = async (req, res, next) => {
  const queryString = `DELETE FROM cards where id=${req.body.delete};`;
  try {
    await db.query(queryString);
    return next();
  } catch (e) {
    return next({
      log: 'Express error handler caught in delete card query error',
      status: 400,
      message: { err: 'An error occured deleteing cards' },
    });
  }
};

module.exports = cardController;
