
/* An example for OpenShift platform. */
var Chat, ChatSchema, MessageSchema, Msg, TelegramBot, bot, domain, host, mongodb_connection_string, mongoose, path, port, token;

path = require('path');

TelegramBot = require('node-telegram-bot-api');

mongoose = require('mongoose');


/* See https://developers.openshift.com/en/node-js-environment-variables.html */

port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

domain = process.env.OPENSHIFT_APP_DNS;


/* provide a sensible default for local development */

mongodb_connection_string = "mongodb://" + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" + process.env.OPENSHIFTH_MONGODB_DB_PASSWORD + "@" + process.env.OPENSHIFT_MONGODB_DATABASE + ":27017/";


/* Your token */

token = process.env.OPENSHIFT_SECRET_TOKEN || require(path.join(__dirname, '..', 'token.json'))["token"];


/* Chat model */

ChatSchema = new mongoose.Schema({
  text: String,
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Messages'
    }
  ]
});

mongoose.model('Chat', ChatSchema);


/* Message model */

MessageSchema = new mongoose.Schema({
  text: String,
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat'
  }
});

mongoose.model('Message', MessageSchema);


/* Load models */

Chat = mongoose.model('Chat');

Msg = mongoose.model('Message');


/* The bot */

bot = new TelegramBot(token, {
  webHook: {
    port: port,
    host: host
  }
});


/* OpenShift enroutes :443 request to OPENSHIFT_NODEJS_PORT */

bot.setWebHook(domain + ":443/" + process.env.OPENSHIFT_APP_NAME + token);

bot.on('message', function(msg) {
  var chatId;
  chatId = msg.chat.id;
  return bot.sendMessage(chatId, "I'm alive!");
});
