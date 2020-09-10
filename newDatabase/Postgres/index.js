const { Pool } = require('pg');

const DATABASE_URL = 'postgres://localhost/sidebar'
const pool = new Pool({
  connectionString: DATABASE_URL,
});

// a generic query, that executes all queries you send to it
function query(text) {
  return new Promise((resolve, reject) => {
    pool
      .query(text)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  query
};

// user: 'tomnguyen',
//   host: 'localhost',
//   database: 'sidebar',
//   port: 5432,
// let query = `SELECT * FROM inventory where shoe_id=405452 and color='BLACK'`;

// pool.connect()
//   .then( (client) => {
//     client.query(query)
//       .then( (res) => {
//         for(let row of res.rows) {
//           console.log(row)
//         }
//       })
//       .catch( (err) => {
//         console.error(err);
//       })
//   })
//   .catch( (err) => {
//     console.error(err);
//   });

//   pool.on('error', (err,client) => {
//     console.error('Error:', err);
//   })
//   pool.once('open', () => {
//     console.log('PostgreSQL connected!')
//   })

//   module.exports.pool = pool;