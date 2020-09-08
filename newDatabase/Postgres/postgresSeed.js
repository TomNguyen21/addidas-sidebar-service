let fs = require('fs');
let faker = require('faker');
const argv = require('yargs').argv

const lines = argv.lines || 10;
var filename = argv.output || 'sizeInfo.csv';
var stream = fs.createWriteStream(filename);

var randomIndex = () => {
  var index = Math.floor(Math.random()* 5)
  return index;
}

var category = ["ORIGINALS", "RUNNING","WORKOUT","SOCCER","TENNIS"];
var color = ["WHITE", "BLACK", "GRAY", "RED", "BLUE", "BROWN", "MAROON", "YELLOW", "TAN", "CAMO"];
var name = ["SUPERSTAR SHOES", "SUPERNAVA SHOES", "SL20 SHOES", "APIZERO ADIUS SHOES", "ULTRABOOST 20 SHOES"];
var shoePrice = [100, 110,120, 130, 140];
var url = [ "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg","https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg" ];
var size = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];

const createShoeInfo = () => {
  const shoeName = name[randomIndex()];
  const quantity = 1;
  const numberOfReview = faker.random.number(100);
  const price = shoePrice[randomIndex()];
  const thumbnailPC = url[randomIndex()];

  return `${shoeName},${quantity},${numberOfReview},${price},${thumbnailPC}\n`
};

const createCategory = (index) => {
  const category_name = category[index]

  return `${category_name}\n`
};

const createColor = (index) => {
  const color_name = color[index];

  return `${color_name}\n`;
}

const createSize = (index) => {
  const size_name = size[index]

  return `${size_name}\n`;
}

const createInventory = () => {

}
const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing(){
    let canWrite = true
    do {
      i--
      let post = createSize(i)
      //check if i === 0 so we would write and call `done`
      if(i === 0){
        // we are done so fire callback
        writeStream.write(`${i},${post}`, encoding, done)
      }else{
        // we are not done so don't fire callback
        writeStream.write(`${i},${post}`, encoding)
      }
      //else call write and continue looping
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
stream.write(`category_id,category_name\n`, 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})



// Code from Rob's Example
// const seed = (entries) => {
//   let dataString = '';
//   for (let i = 0; i < entries; i += 1) {
//     dataString += `${i}: `;
//     dataString += `comment ${i}`;
//     dataString += `\n`;
//   };
//   return new Promise((resolve, reject) => {
//     fs.writeFile('postgreSQLdata.txt', dataString, (err, results) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(results)
//       }
//     })
//   })
// }

// seed(1000)
//   .then(() => {console.log('success')})
//   .catch(() => {console.log('failed')})