bot.on 'message', (msg) ->
        chatId = msg.chat.id;
        bot.sendMessage chatId, "I'm alive!"
