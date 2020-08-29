const express = require('express');
const model = require('../database/model.js');
const path = require('path');
const app = express();
const PORT = 3380;
const expressStaticGzip = require('express-static-gzip');

// app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(expressStaticGzip(path.join(__dirname, '../client/dist'), { enableBrotli: true, orderPreference: ['br'] }));

// * TODO *
// extend existing API and create PUT and DELETE requests

app.get('/sidebar/summary', function (req, res) {
  // console.log(req, 'req body');

  model.getOneProduct((err, results) => {
    if (err) {
      console.log('error', err);
      res.status(400);
    } else {
      res.status(200).send(results)
    }
  })
})

app.put('/sidebar/summary', (req, res) => {
  model.updateProduct(req.body, (err, results) => {
    if (err) {
      console.log('err', err);
      res.statuse(401)
    } else {
      res.status(201).end()
    }
  })
})


app.post('/sidebar/summary', (req, res) => {
  // should i update the database as well?
})

app.delete('/sidebar/summary', (req, res) => {

})
// app.post('/kix', (req, res) => {
//   model.updateProductColor(req.body, (err, results) => {
//     if (err) {
//       console.log('err', err);
//       res.statuse(401)
//     } else {
//       res.status(201).end()
//     }
//   })
// })

app.listen(PORT, () => console.log('Server is listening at port', PORT))