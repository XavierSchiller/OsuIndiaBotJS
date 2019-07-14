const Embed = require('../utils/embedCreator');
const db = require('../clients/nedb');
module.exports = function setUser(msg, msgargs) {
  db.setUser(msg.author.id, msgargs[0]);
  const em = new Embed(
      'Username Confirmation',
      `Your Username has been set as ${msgargs[0]}`
  );
  return em;
};
