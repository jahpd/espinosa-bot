### The bot ###
bot = new TelegramBot token, {webHook: {port: port, host: host}}

### OpenShift enroutes :443 request to OPENSHIFT_NODEJS_PORT ###
bot.setWebHook("#{domain}:443/#{process.env.OPENSHIFT_APP_NAME}#{token}")
