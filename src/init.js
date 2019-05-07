const Discord = require('./discord');

odule.exports = function init() {
  initEvents();
  Discord.connect().catch((err) => {
    console.log(err);
  });
};

/**
 * Initializes events
 */
function initEvents() {
  const events = ['messageCreate'];
  events.forEach((event) => {
    Discord.on(event, require('./events/' + event));
  });
}
