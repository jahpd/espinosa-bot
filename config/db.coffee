### provide a sensible default for local development ###
mongodb_connection_string = "mongodb://#{process.env.OPENSHIFT_MONGODB_DB_USERNAME}:#{process.env.OPENSHIFTH_MONGODB_DB_PASSWORD}@#{process.env.OPENSHIFT_MONGODB_DATABASE}:27017/";
