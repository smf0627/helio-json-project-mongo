const Db = require('./mongo');

module.exports = {

  insert() {
    return Db.then(db => {
      const collection = db.collection('schemata');

      // TODO: Put insert here
    });
  }
};