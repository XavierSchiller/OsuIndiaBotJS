const Tokens = require('../configs/config.json');
const eris = require('eris');

const Discord = new eris.CommandClient(
    Tokens.DiscordKey,
    {
      autoreconnect: true,
    },
    {
      description: 'A Bot Specifically Designed for Osu!India.',
      owner: 'Xav',
      prefix: '`',
    }
);

/**
 * Invokes registerCommand() within eris with additional functionality.
 * @param {string} commandName Name of the command that needs to be registered.
 * @param {function} functionName Callback to the listener.
 * @param {Array<string>} aliases String array of aliases.
 */
function addCommand(commandName, functionName, aliases) {
  Discord.registerCommand(
      commandName,
      (msg, args) => {
        functionName(msg, args);
      },
      {
        aliases: aliases,
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: 'Wait for 5 seconds before using this command again!',
      }
  );
}

/**
 *
 * @param {embed} data Embed data you wanted to send.
 * @param {string} channelID Specified Channel.
 */
function sendMessage(data, channelID) {
  Discord.createMessage(channelID, data).catch((err) => {
    console.log(err);
  });
}

/**
 *
 * @param {event} eventName The Name of the event.
 * @param {function} functionName Callback for the event.
 */
function onEvent(eventName, functionName) {
  Discord.on(eventName, (call, oldcall) => {
    functionName(call, oldcall);
  });
}
/**
 * Starts the Discord Client.
 */
function start() {
  Discord.connect().catch((err) => console.log(err));
}
module.exports = {
  addCommand: addCommand,
  sendMessage: sendMessage,
  onEvent: onEvent,
  start: start,
};
