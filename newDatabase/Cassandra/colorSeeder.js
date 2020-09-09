const fs = require('fs');
const v8 = require('v8');
const csv = require('csvtojson');
const csvFilePath = './shoeInfoCassandra1.csv';
let fileindex = 1;


let filename = `./seedFiles/colorInfo10_${fileindex}.csv`;
let writeStream = fs.createWriteStream(filename);

let colorArray = ["WHITE", "BLACK", "GRAY", "RED", "BLUE", "BROWN", "MAROON", "YELLOW", "TAN", "CAMO", "BROWN", "RED", "WHITE", "BLUE", "BLACK", "GRAY"];
var url = [ "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_Black/superstar_Black.jpg","https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White/Superstar_white.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Sparkle/Superstar_White_Sparkle.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Silver/1.jpg", "https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/Options/SuperStar_White_Black/Superstar_White_Black.jpg" ];

let colorAmount = [3, 4, 2, 5, 2, 3, 4, 5, 3, 2, 6, 4, 3];

const writeLine = (writer, callback) => {
   csv()
    .fromFile(csvFilePath)
    .then((shoes) => {
      //declare file path
        let i = 0;
        let writing = () => {
        let ok = true;
        do {
          var shoe = shoes[i];
          var string = '';
          for (var j = 0; j < colorAmount[i % colorAmount.length]; j++) {
            let shoe_id = shoe.id;
            let name = shoe.name;
            let price = shoe.price;
            let color = colorArray[(i + j) % colorArray.length];
            let thumbnail = url[(i + j) % url.length];

            string += `${shoe_id},${color},${name},${price},${thumbnail}\n`
          }
          if (i === shoes.length - 1) {
            writeStream.write(string, 'utf-8', callback);
          } else {
            ok = writeStream.write(string, 'utf-8')
          }
          if((i +1 % 1000000) === 0) {
            console.log(`${i} shoes`);
          }
          i += 1;
        } while(i < shoes.length && ok)
        if (i < shoes.length) {
          // writeFile 2/ 3
          writeStream.once('drain', writing)
        }
        // return new Promise(function (resolve) {
        //   resolve(final_str)
        // })
      }
      writing();
      });
      // writeNtimes(writeStream, () => {
      //   console.log('color written!')
      //   writeStream.end();
      // })
    };


// writeNTimes 1/ 2
// var writeNTimes = (writer, times, callback) => {
//   // writeFile 1/ 3
//   // (async function () {
//   async function writeFile() {
//     let ok = true;
//     do {
//       times--;
//       // WRITELINE 2/2
//       const data = await writeLine()
//       // console.log(data, 'data, 68')
//       if (times === 0) {
//         writer.write(data, 'utf-8', callback);
//       } else {
//         ok = writer.write(data, 'utf-8')
//         if (!ok) {
//           checkMemoryNative();
//         }
//       }
//     } while (times > 0 && ok);
//     if (times > 0) {
//       // writeFile 2/ 3
//       writer.once('drain', writeFile)
//     }
//   }
//   // }
//   // )()
//   // writeFile 3/ 3
//   writeFile();
// }


// const writeStream = fs.createWriteStream(`./seedFiles/newColor${fileIdx}.csv`)
const line1 = 'id,color,name,price,thumbnail\n';
writeStream.write(line1);
// writeNTimes 2/ 2
writeLine(writeStream, () => {
    console.log('color written!')
    writeStream.end();
  });
// writeNtimes(writeStream, () => {
//   console.log('color written!')
// })