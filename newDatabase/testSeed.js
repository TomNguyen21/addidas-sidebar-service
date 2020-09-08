const fs = require('fs');

let category = ["ORIGINALS", "RUNNING","WORKOUT","SOCCER","TENNIS"];
let color = ["WHITE", "BLACK", "GRAY", "RED", "BLUE", "BROWN", "MAROON", "YELLOW", "TAN", "CAMO"];
let name = ["SUPERSTAR SHOES", "SUPERNAVA SHOES", "SL20 SHOES", "APIZERO ADIUS SHOES", "ULTRABOOST 20 SHOES"];
let shoePrice = [100, 110,120, 130, 140];
let numOfReviews = [121, 423, 153, 251, 354]
let url = [ "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg","https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg" ];


let shoeInfoSeed = (entries) => {
  let dataString = `shoeName,quantity,numberOfReview,price,thumbnailPC\n`;

  for (let i = 0; i < entries; i += 1) {
    const shoeName = name[i % 5];
  const quantity = 1;
  const numberOfReview = numOfReviews[i % 5];
  const price = shoePrice[i % 5];
  const thumbnailPC = url[i % 5];

  dataString += `${shoeName},${quantity},${numberOfReview},${price},${thumbnailPC}\n`
  };

  return new Promise( (resolve, reject) => {
    fs.writeFile('shoeInfoTest.csv', dataString, (err, results) => {
      if(err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

shoeInfoSeed(10000000)
  .then( () => { console.log('Success') })
  .catch( () => { console.log('Failure') })