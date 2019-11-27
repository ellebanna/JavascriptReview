exports.myDateTime = function () {
    return Date();
  };

//   creating a module in javascript

// Use this module  in a Node.js file: 'firstNode.js'
// var http = require('http');

// var dt = require('./myfirstmodule'); added


// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});

//   res.write("The date and time are currently: " + dt.myDateTime());  added

//   res.end();
// }).listen(8080);