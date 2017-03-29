// /**
//  * Created by yzw on 2017/3/13.
//  */
//
// var app = require('express')();
// var fs = require('fs');
// var http = require('http');
// var https = require('https');
//
// var privateKey  = fs.readFileSync('./private.pem', 'utf8');
// var certificate = fs.readFileSync('./file.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
//
// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
// var PORT = 18080;
// var SSLPORT = 18081;
//
//
// httpServer.listen(PORT, function() {
//     console.log('HTTP Server is running on: http://localhost:%s', PORT);
// });
// httpsServer.listen(SSLPORT, function() {
//     console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
// });
//
//
// // Welcome
// app.get('/', function(req, res) {
//     if(req.protocol === 'https') {
//
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.write("Welcome to Safety Land!");
//         res.end();
//
//         //res.status(200).send('Welcome to Safety Land!');
//     }
//     else {
//
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.write("Welcome ddd!");
//         res.end();
//
//        // res.status(200).send('Welcome!');
//     }
// });
//
//
// // Welcome
// app.get('/kk', function(req, res) {
//
//     if(req.protocol === 'https') {
//         res.status(200).send('Welcome KK HTTPS!');
//     }
//     else {
//         res.status(200).send('Welcome KK HTTP!');
//     }
// });
//
//
// //

// var http = require("http");
//
// function start() {
//
//     function onRequest(request, response) {
//
//         console.log("Request received.");
//
//         response.writeHead(200, {"Content-Type": "text/plain"});
//
//         response.write("Hello World");
//
//         response.end();
//
//     }
//
//     http.createServer(onRequest).listen(8888);
//
// }
//
// exports.start = start;



var http = require("http");

var url = require("url");

function start(route,handle) {

    function onRequest(request, response) {

      //   var pathname = url.parse(request.url).pathname;
      //   response.writeHead(200, {"Content-Type": "text/plain"});
      //
      //   route(handle,pathname,response);
      //  // response.write(content);
      //
      // //  response.end();


        var pathname = url.parse(request.url).pathname;

        route(handle, pathname, response, '',request);


        // var postData = "";
        //
        // var pathname = url.parse(request.url).pathname;
        //
        // console.log("Request for " + pathname + " received.");
        //
        // request.setEncoding("utf8");
        //
        // request.addListener("data", function(postDataChunk) {
        //
        //     postData += postDataChunk;
        //
        //     console.log("Received POST data chunk '"+ postDataChunk + "'.");
        //
        // });
        //
        // request.addListener("end", function() {
        //
        //     route(handle, pathname, response, postData,request);
        //
        // });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}


exports.start = start;


// var http = require("http");
//
// function onRequest(request, response) {
//
//     response.writeHead(200, {"Content-Type": "text/plain"});
//
//     response.write("Hello World!");
//
//     response.end();
//
// }
// http.createServer(onRequest).listen(8888,()=>{console.log("HTTP Server is running on: http://localhost:8888")})
