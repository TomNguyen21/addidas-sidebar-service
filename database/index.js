const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sidebar', { useNewUrlParser: true, useUnifiedTopology: true });
// mongodb://172.17.0.2:27017/sidebar
// 172.17.0.3:27017
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!')
});

const productSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  category: String,
  quantity: Number,
  size : Number,
  name: String,
  numberOfReview: Number,
  color: String,
  price: Number,
  thumbnailPC: String,
  mail: String
});

const Shoes = mongoose.model('Shoes', productSchema);

// let getAll = (callback) => {
//   Shoes.find((error, results) => {
//     if(error) {
//       console.log('cannot get data from database')
//     } else {
//       callback(null,results)
//     }
//   });
// }

module.exports.db = db;
module.exports.Shoes = Shoes;
// module.exports.getAll = getAll;
