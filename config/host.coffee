### See https://developers.openshift.com/en/node-js-environment-variables.html ###
port = process.env.OPENSHIFT_NODEJS_PORT or 8080
host = process.env.OPENSHIFT_NODEJS_IP   or '127.0.0.1'
domain = process.env.OPENSHIFT_APP_DNS
