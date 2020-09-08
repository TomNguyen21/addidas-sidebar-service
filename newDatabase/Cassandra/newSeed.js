const fs = require('fs');

// let lines = 100000000;
let fileindex = 1;
let filename = `./seedFiles/testing_${fileindex}.csv`;
let stream = fs.createWriteStream(filename);

var categoryArray = ["ORIGINALS", "RUNNING","WORKOUT","SOCCER","TENNIS"];
var colorArray = ["WHITE", "BLACK", "GRAY", "RED", "BLUE", "BROWN", "MAROON", "YELLOW", "TAN", "CAMO"];
var nameArray = ["SUPERSTAR SHOES", "SUPERNAVA SHOES", "SL20 SHOES", "APIZERO ADIUS SHOES", "ULTRABOOST 20 SHOES"];
var priceArray = [100, 110,120, 130, 140];
var url = [ "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg","https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg" ];
var sizeArray = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
var quantityArray = [1, 2, 3, 4, 5, 1, 3, 2, 1, 1]
var numberOfReviewArray = [102, 532, 233, 211, 145, 634, 221, 42, 455, 621, 215, 318, 234, 11, 61, 34, 1, 53, 12]

let colorFile = fs.createReadStream('./seedFiles/colorInfo_1.csv',{endoing: 'utf-8',
start: 30});
// colorFile.on('data', (chunk) => {
//   console.log(chunk.toString())
// })
colorFile.on('data',(chunk) => {
  let shoeGenerator = (writeStream, encoding, done) => {
    // console.log(chunk.toString());
    var shoe = chunk.toString().split(',');
    let i = 1;
    let id = 0;
    let writing = () => {
    let ok = true;
    do {
      // var shoe = chunk.toString();
      // console.log(shoe.length, 'shoe')
      var string = '';
      for (var j = 0; j < sizeArray.length; j++) {
        let shoe_id = shoe[0];
        let color = shoe[1];
        let size = sizeArray[j];
        let quantity = quantityArray[(i+j) % quantityArray.length];

        string += `${shoe_id},${color},${size},${quantity}\n`
      }

        if(i === chunk.length) {
          writeStream.write(string, encoding, done);
        } else {
          canWrite = writeStream.write(string, encoding);
        }
        if((i % 1000000) === 0) {
          console.log(`${id} shoes`)
          fileindex += 1;
          filename = `./seedFiles/testing_${fileindex}.csv`;
          writeStream = fs.createWriteStream(filename);
        }
        i += 1;
      } while(i < chunk.length && canWrite)

      if(i < chunk.length) {
        writeStream.once('drain',writing);
      }
    }
    writing();
  }

  stream.write('id,color,size,quantity\n', 'utf-8');
  shoeGenerator(stream, 'utf-8', () => {
    stream.end();
  });
})
colorFile.on('close', () => {
  console.log('stream closed');
})