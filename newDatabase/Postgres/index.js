const { Pool, Client } = require('pg');

const DATABASE_URL = 'postgres://localhost/sidebar'
const pool = new Pool({
  connectionString: DATABASE_URL,
});


let client = new Client({
  user: 'tomnguyen',
  host: 'localhost',
  database: 'sidebar',
  port: 5432,
}
);
client.connect();

module.exports = {
  // query,
  client
};