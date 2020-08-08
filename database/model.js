const mongoose = require('mongoose');
const db = require('./index.js');


let getAll = (callback) => {
  db.Shoes.find((error, results) => {
    if(error) {
      console.log('cannot get data from database')
    } else {
      callback(null,results)
    }
  });
}

module.exports= getAll