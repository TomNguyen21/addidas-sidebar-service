const express = require('express');
const model = require('../database/model.js');
const app = express();
const PORT = 3380;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());


app.get('/sidebar/summary', function (req, res) {
  model.getOneProduct((err, results) => {
    if (err) {
      console.log('error', err);
      res.status(400);
    } else {
      res.status(200).send(results)
    }
  })
})

app.post('/sidebar/summary', (req, res) => {
  model.updateProduct(req.body, (err, results) => {

    if (err) {
      console.log('err', err);
      res.statuse(401)
    } else {
      res.status(201).end()
    }
  })
})

app.listen(PORT, () => console.log('Server is listening at port', PORT))