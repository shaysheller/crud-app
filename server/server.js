const express = require('express');

const app = express();
const path = require('path');
// ! Uncomment lines 5 and 10 if we run into CORS issues
// ! ran into cors issues :(
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = require('./routes/apiRouter');
const cardRouter = require('./routes/cardRouter');

app.use('/', apiRouter);

app.use('/card', cardRouter);

// app.get('/api', (req,res) => {
//     res.send('hello world from express');
// })

// app.get('/login', (req, res) => {
//     const obj = {
//         string: 'success'
//     }
//     return res.status(200).json(obj);
// })

// app.get('/', (req, res) => {
//     const obj = {
//         string: 'success'
//     }
//     return res.status(200).send(obj);
// })

app.use('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../build/index.html')));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
