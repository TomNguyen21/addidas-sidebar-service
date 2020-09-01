const database = require('./index.js');

var randomIndex = () => {
  var index = Math.floor(Math.random()* 5)
  return index;
}


var category = ["ORIGINALS", "RUNNING","WORKOUT","SOCCER","TENNIS"]
var color = ["WHITE", "BLACK", "GRAY", "RED", "BLUE", "BROWN", "MAROON", "YELLOW", "TAN", "CAMO"]
var name = ["SUPERSTAR SHOES", "SUPERNAVA SHOES", "SL20 SHOES", "APIZERO ADIUS SHOES", "ULTRABOOST 20 SHOES"]
var price = [100, 110,120, 130, 140]
var url = [ "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg","https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg" ]

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
      thumbnailPC: url[randomIndex()],
      main: url[0]
    })
    // .then(() => database.db.disconnect())
  }
};

insertSampleData();
