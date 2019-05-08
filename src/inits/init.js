const Discord = require('../Clients/discord');

module.exports = init;

/**
 * Initalizes the commands and events for the bot and starts it.
 */
function init() {
  initCommands();
  initEvents();
  Discord.start();
}

/**
 * Initalizes all Events.
 */
function initEvents() {
  const messageCreate = require('../events/messageCreate');
  Discord.onEvent('messageCreate', messageCreate);
}

/**
 * Initalizes all commands.
 */
function initCommands() {
  // get Osu Commands;
  const osuinit = require('./osuinit');
  osuinit();
}
