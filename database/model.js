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

let insertProduct = (req, res) => {
  if(!req.body.id) {
    return res.status(400).send({
      message: "required field can not be empty",
    });
  }
  const newProduct = new db.Shoes({
    id: 4325,

  })
}

let updateProduct = (product, callback) => {
  db.Shoes.findOneAndUpdate({"id": product.id},{"$set":{"size": product.size, "quantity": product.quantity}}, (error, results) => {
    if (error) {
      console.log('cannot post size nad quantity')
    } else {
      callback(null, results)
    }
  });
}


// let updateProductColor = (product, callback) => {
//   db.Shoes.findOneAndUpdate({"id": product.id},{"$set":{"main": product.main}}, (error, results) => {
//     if (error) {
//       console.log('cannot post size nad quantity')
//     } else {
//       callback(null, results)
//     }
//   });
// }

module.exports.getAll= getAll;
module.exports.getOneProduct = getOneProduct;
module.exports.updateProduct = updateProduct;