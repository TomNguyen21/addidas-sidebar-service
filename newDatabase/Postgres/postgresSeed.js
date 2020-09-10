let fs = require('fs');
let faker = require('faker');

const lines = 10000000;
// maybe have in function to manipulate
var filename = './postgresSeeds/shoeInfo.csv';
var stream = fs.createWriteStream(filename);
var colorFile = './postgresSeeds/colorInfo.csv';
var colorStream = fs.createWriteStream(colorFile);
var sizeFile = './postgresSeeds/sizeInfo.csv';
var sizeStream = fs.createWriteStream(sizeFile);
// use arrays of different lengths and modulo to get pseudo random results

var categoryArray = ["ORIGINALS", "RUNNING","WORKOUT","SOCCER","TENNIS"];
var colorArray = ["WHITE", "BLACK", "GRAY", "RED", "BLUE", "BROWN", "MAROON", "YELLOW", "TAN", "CAMO"];
var nameArray = ["SUPERSTAR SHOES", "SUPERNAVA SHOES", "SL20 SHOES", "APIZERO ADIUS SHOES", "ULTRABOOST 20 SHOES"];
var priceArray = [100, 110,120, 130, 140];
var url = [ "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg","https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg" ];
var sizeArray = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
var quantityArray = [1, 2, 3, 4, 5, 1, 3, 2, 1, 1];
var numberOfReviewArray = [213,451,231,223,451,32,62,12,564,23,121,312,11,56,321,32,355,332,216,35];
let colorAmount = [3, 4, 2, 5, 2, 3, 4, 5, 3, 2, 6, 4, 3];

// const createShoeInfo = () => {
//   // get rid of randomIndex and use pseudo random with modulo
//   const shoeName = name[randomIndex()];
//   const quantity = quantityArray[randomIndex2()];
//   const numberOfReview = faker.random.number(100);
//   const price = shoePrice[randomIndex()];
//   const thumbnailPC = url[randomIndex()];
//   const category_name = category[randomIndex()];
//   const color_name = color[randomIndex2()];
//   const size_name = size[randomIndex2()];

//   return `${color_name},${quantity},${size_name}\n`
// };

// ${category_name},${numberOfReview},${color_name},${quantity},${size_name},${thumbnailPC}
const shoeGenerator = (writeStream, encoding, done) => {
  let i = lines;



  function writing(){
    let canWrite = true
    let shoe = '';
    do {
      let shoeColor = '';
      i--
      // let post = createShoeInfo(i)
      //check if i === 0 so we would write and call `done`
      let id = lines - i;
      let name = nameArray[i % nameArray.length];
      let category = categoryArray[i % categoryArray.length];
      let numberOfReview = numberOfReviewArray[i % numberOfReviewArray.length];
      let thumbnail = url[i % url.length];


      shoe = `${id},${name},${category},${numberOfReview},${thumbnail}\n`;

      for ( let j = 0; j < colorAmount[i % colorAmount.length]; j += 1) {
        let color_id = colorArray.indexOf(colorArray[(i+j) % colorArray.length]) + 1;
        let color = colorArray[(i+j) % colorArray.length];
        let price = priceArray[(i+j) % priceArray.length];

        shoeColor += `${id},${color_id},${color},${price}\n`;


      let shoeSize = '';
        // console.log(shoeColor)
        for (let k = 0; k < sizeArray.length; k += 1) {
          let size_id = k + 1;
          let size = sizeArray[k];
          let quantity = quantityArray[(i+j+k) % quantityArray.length];

          shoeSize += `${id},${size_id},${size},${quantity}\n`
        }
        if(i === 0){
          sizeStream.write(shoeSize, encoding, done);
        }else{
          canWrite = sizeStream.write(shoeSize, encoding)
        }
      }
      //in colors by shoe select all where shoe id = 50
      //use append in inner generators (fs.appendFile())
      if(i === 0){
        // we are done so fire callback
        writeStream.write(shoe, encoding, done);
        colorStream.write(shoeColor, encoding, done);
        // sizeStream.write(shoeSize, encoding, done);
      }else{
        // we are not done so don't fire callback
        canWrite = writeStream.write(shoe, encoding) && colorStream.write(shoeColor, encoding)

        // console.log(sizeStream.write(shoeSize, encoding))
      }
      //else call write and continue looping
      if(i % 1000000 === 0) {
        console.log(`${id} shoes`)
      }
    } while(i > 0 && canWrite)
    if(i > 0 && !canWrite){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

//write our `header` line before we invoke the loop
stream.write(`id,name,category,numberOfReview,url\n`, 'utf-8')
//invoke startWriting and pass callback
shoeGenerator(stream, 'utf-8', () => {
  console.log('shoes have finished writing')
  stream.end()
})
