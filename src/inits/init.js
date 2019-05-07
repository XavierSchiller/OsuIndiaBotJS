const Discord = require('../discord');

module.exports = function init() {
  initCommands();
  initEvents();
  Discord.connect().catch((err) => {
    console.log(err);
  });
};

function initEvents() {
  const events = ['messageCreate'];
  events.forEach((event) => {
    Discord.on(event, require('../events/' + event));
  });
}

function initCommands() {
  // get Osu Commands;
  const osuinit = require('./osuinit');
  osuinit();
}
