### Your token ###
token = process.env.OPENSHIFT_SECRET_TOKEN or require(path.join(__dirname, '..', 'token.json'))["token"]
