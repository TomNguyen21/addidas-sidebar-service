let fs = require('fs')

const seed = (entries) => {
  let dataString = '';
  for (let i = 0; i < entries; i += 1) {
    dataString += `${i}: `;
    dataString += `comment ${i}`;
    dataString += `\n`;
  };
  return new Promise((resolve, reject) => {
    fs.writeFile('postgreSQLdata.txt', dataString, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

seed(1000)
  .then(() => {console.log('success')})
  .catch(() => {console.log('failed')})