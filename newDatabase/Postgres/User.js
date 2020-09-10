const database = require('./index.js');

const User = {
  async readAll(req, res) {
    try {
      const query = 'SELECT * FROM inventory where inventory_id<100';
      const { rows } = await database.query(query);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  }
};

module.exports = User;