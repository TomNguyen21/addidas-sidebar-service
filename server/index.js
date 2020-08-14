const express = require('express');
const model = require('../database/model.js');
const app = express();
const PORT = 3380;

app.use(express.static(__dirname + '/../client/dist'));

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

app.listen(PORT, () => console.log('Server is listening at port', PORT))