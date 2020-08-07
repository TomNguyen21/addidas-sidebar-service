const database = require('./index.js');

var randomIndex = () => {
  var index = Math.floor(Math.random()* 5)
  return index;
}


var category = ["ORIGINALS", "RUNNING","WORKOUT","SOCCER","TENNIS"]
var color = ["WHITE", "BLACK", "GRAY", "RED", "BLUE"]
var name = ["SUPERSTAR SHOES", "SUPERNAVA SHOES", "SL20 SHOES", "APIZERO ADIUS SHOES", "ULTRABOOST 20 SHOES"]
var price = [100, 110,120, 130,140]
var url = [ "https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg", "https://assets.adidas.com/images/w_600,f_auto,q_auto/051468fdea724c45…bbabbf00fe1b4e_9366/Ultraboost_DNA_Prime_Shoes_Red_FV6053_01_standard.jpg", "https://assets.adidas.com/images/w_600,f_auto,q_auto/8c985fbe82564b83b37cab5800e66930_9366/adidas_by_Stella_McCartney_Ultraboost_20_Shoe_Yellow_FW6360_01_standard.jpg", "https://assets.adidas.com/images/w_600,f_auto,q_auto/e466d77570f74557bd1dab3c011ae2db_9366/SoleMatch_Bounce_Hard_Court_Shoes_Blue_EH2866_01_standard.jpg", "https://assets.adidas.com/images/w_600,f_auto,q_auto/48fe3811c39449f1a9d7aba6010e8f5b_9366/Novamotion_Shoes_Blue_FW7297_01_standard.jpg" ]

var numReviews = () => {return Math.floor(Math.random()* (800-20) + 20)}


var insertSampleData = function () {
  for (var i = 1; i <= 100; i++) {
    database.Shoes.create({
      id: i,
      category: category[randomIndex()],
      quantity: 0,
      size: 0,
      name: name[randomIndex()],
      numberOfReview: numReviews(),
      color: color[randomIndex()],
      price: price[randomIndex()],
      thumbnailPC: url[randomIndex()]
    })
    .then(() => database.db.disconnect())
  }
};

insertSampleData();
