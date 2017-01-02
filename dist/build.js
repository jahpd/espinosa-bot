
/* An example for OpenShift platform. */
var APP_NAME, TelegramBot, bot, domain, host, mongodb_connection_string, path, port;

path = require('path');

TelegramBot = require('node-telegram-bot-api');

APP_NAME = require('./package.json')['name'];


/* See https://developers.openshift.com/en/node-js-environment-variables.html */

port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

domain = process.env.OPENSHIFT_APP_DNS;


/* provide a sensible default for local development */

mongodb_connection_string = "mongodb://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@" + process.env.MONGODB_DATABASE + ":27017/" + APP_NAME;


/* The bot */

bot = new TelegramBot(token, {
  webHook: {
    port: port,
    host: host
  }
});


/* OpenShift enroutes :443 request to OPENSHIFT_NODEJS_PORT */

bot.setWebHook(domain + ':443/#{APP_NAME}' + token);

bot.on('message', function(msg) {
  var chatId;
  chatId = msg.chat.id;
  return bot.sendMessage(chatId, "I'm alive!");
});
