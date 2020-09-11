require('newrelic');
const express = require('express');
const model = require('../database/model.js');
const path = require('path');
const app = express();
const pg = require('../newDatabase/Postgres/index.js')
// const user = require('../newDatabase/Postgres/User.js');
const PORT = 3380;
const expressStaticGzip = require('express-static-gzip');
// const { Client } = require('pg');

// let client = new Client({
//   user: 'tomnguyen',
//   host: 'localhost',
//   database: 'sidebar',
//   port: 5432,
// });
// client.connect();


// app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(expressStaticGzip(path.join(__dirname, '../client/dist'), { enableBrotli: true, orderPreference: ['br'] }));

// * TODO *
// extend existing API and create PUT and DELETE requests
// app.get('/sidebar/summary', user.readAll);
app.get('/sidebar/summary', (req, res) => {
  let query = `select * from inventory where inventory_id<10;`;
  pg.client
    .query(query)
    .then((data) => {
      console.log(data.rows)
      res.status(200).send(data.rows);
    })
    .catch( (err) => {
      res.status(400).send(err);
    })
});
// app.get('/sidebar/summary', function (req, res) {
//   console.log(req, 'req body');

//   model.getOneProduct((err, results) => {
//     if (err) {
//       console.log('error', err);
//       res.status(400);
//     } else {
//       res.status(200).send(results)
//     }
//   })
// })

app.put('/sidebar/summary', (req, res) => {
  // model.updateProduct(req.body, (err, results) => {
  //   if (err) {
  //     console.log('err', err);
  //     res.statuse(401)
  //   } else {
  //     res.status(201).end()
  //   }
  // })
})


app.post('/sidebar/summary', (req, res) => {
  // should i update the database as well?
  let query = `insert into inventory(shoe_id,color,size,quantity) VALUES (${req.body.shoe_id},${req.body.color},${req.body.size},${req.body.quantity})`;
  console.log(req.body)
  pg.client
    .query(query)
    .then( (data) => {
      res.status(201).send('added to db!')
    })
    .catch( (err) => {
      res.status(400).send(err);
    })
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