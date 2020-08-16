const mongoose = require('mongoose');
const db = require('./index.js');


const randomId = Math.floor(Math.random()*100)


let getAll = (callback) => {
  db.Shoes.find((error, results) => {
    if(error) {
      console.log('cannot get data from database')
    } else {
      callback(null,results)
    }
  });
}

let getOneProduct = (callback) => {
  db.Shoes.find({id: randomId}, (error, results) => {
    if(error) {
      console.log('Cannot get one product from database')
    } else {
      callback(null,results)
    }
  });
}

module.exports.getAll= getAll;
module.exports.getOneProduct = getOneProduct;