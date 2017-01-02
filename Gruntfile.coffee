path = require 'path'

libs = (l...)-> path.join(__dirname, file)+".coffee" for file in l
 
module.exports = (grunt) ->
        files = libs 'boot/libs','config/host','config/db','config/token','app/models/chat','app/models/message','boot/db','app/bot','app/controllers/chat','app/controllers/message'
        build = path.join __dirname, 'dist/build.js'
        options =
                coffee:
                        options:
                                bare: true
                                map: true
                                join: true
                        compileJoined: 
                                files: 
                                      "#{build}": files 

        grunt.initConfig options
        grunt.loadNpmTasks 'grunt-contrib-coffee'
        grunt.registerTask 'default', ['coffee']

