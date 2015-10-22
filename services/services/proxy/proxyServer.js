/**
 * Created by blade on 2015/1/26.
 */
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var config = require("../../config/baseConfig.js");
exports.proxy=function(req,res) {
    var random = Math.random() * 10;
    var url = config.proxy.url + req.originalUrl + (req.originalUrl.indexOf('?') > 0 ? '&_=' + random : '?_=' + random);
    console.log(url);
    proxy.web(req, res, { target: url  }, function (e) {
        console.error(e);
    });
}