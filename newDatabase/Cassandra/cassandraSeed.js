let fs = require('fs');
let faker = require('faker');

const lines = 1000000;
// maybe have in function to manipulate
var filename = 'shoeInfoCassandra1.csv';
var stream = fs.createWriteStream(filename);

// use arrays of different lengths and modulo to get pseudo random results

var categoryArray = ["ORIGINALS", "RUNNING","WORKOUT","SOCCER","TENNIS"];
var colorArray = ["WHITE", "BLACK", "GRAY", "RED", "BLUE", "BROWN", "MAROON", "YELLOW", "TAN", "CAMO"];
var nameArray = ["SUPERSTAR SHOES", "SUPERNAVA SHOES", "SL20 SHOES", "APIZERO ADIUS SHOES", "ULTRABOOST 20 SHOES"];
var priceArray = [100, 110,120, 130, 140];
var url = [ "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg","https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg" ];
var sizeArray = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
var quantityArray = [1, 2, 3, 4, 5, 1, 3, 2, 1, 1];
var numberOfReviewArray = [213,451,231,223,451,32,62,12,564,23,121,312,11,56,321,32,355,332,216,35];

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
  let i = lines
  function writing(){
    let canWrite = true
    do {
      i--
      // let post = createShoeInfo(i)
      //check if i === 0 so we would write and call `done`
      let id = lines - i;
      let name = nameArray[i % nameArray.length];
      let category = categoryArray[i % categoryArray.length];
      let numberOfReview = numberOfReviewArray[i % numberOfReviewArray.length];
      let price = priceArray[i % priceArray.length];

      let shoe = `${id},${name},${category},${numberOfReview},${price}\n`;
      //call color generator and pass in shoe
      //should have a helper function to create the array of array of colors
      // const colorGenerator = (shoe) => {
      //   //define whats going to be added to the string aka the colors and the picture
      //   let color = shoe,

      // }
      //in colors by shoe select all where shoe id = 50
      //use append in inner generators (fs.appendFile())
      if(i === 0){
        // we are done so fire callback
        writeStream.write(shoe, encoding, done)
      }else{
        // we are not done so don't fire callback
        canWrite = writeStream.write(shoe, encoding)
        // console.log(canWrite);
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
stream.write(`id,name,category,numberOfReview,price\n`, 'utf-8')
//invoke startWriting and pass callback
shoeGenerator(stream, 'utf-8', () => {
  stream.end()
})

// const categoryWriting = (writeStream, encoding, done) => {
//   let i = lines
//   function writing(){
//     let canWrite = true
//     do {
//       i--
//       let post = createCategory()
//       //check if i === 0 so we would write and call `done`
//       if(i === 0){
//         // we are done so fire callback
//         writeStream.write(post, encoding, done)
//       }else{
//         // we are not done so don't fire callback
//         writeStream.write(post, encoding)
//       }
//       //else call write and continue looping
//     } while(i > 0 && canWrite)
//     if(i > 0 && !canWrite){
//       //our buffer for stream filled and need to wait for drain
//       // Write some more once it drains.
//       writeStream.once('drain', writing);
//     }
//   }
//   writing()
// }

// filename = argv.output || 'category.csv';


// //write our `header` line before we invoke the loop
// stream.write(`category_name\n`, 'utf-8')
// //invoke startWriting and pass callback
// categoryWriting(stream, 'utf-8', () => {
//   stream.end()
// })

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