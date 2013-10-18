
exec = require("child_process").exec,
_ = require("underscore")

module.exports = {

        //url to proxy when running tests - important to prevent cross-site security
        //issues
        proxy: "http://localhost:8081",

        //tests to run - these are actually loaded in the browser
        scripts: [
                __dirname + "/test/**.js"
        ],

        //files to watch, then reload
        watch: [
                __dirname + "/public/**",
                __dirname + "/test/**"
        ],

        //port to run tests on - open in http://localhost:8083/test
        port: 8083,

        //full integration
        full: true,

        //keep the tests alive for dev mode
        keepAlive: true,

        events: {
                init: function () {
                        exec("open http://localhost:8083/test")
                }
        }
};
