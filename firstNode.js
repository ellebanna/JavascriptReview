var http = require('http');
var dt = require('./createModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());

  // 200 means OKay
  res.end('Hello World!');
}).listen(8080);

// Save the file on your computer: C:\Users\Your Name\myfirst.js

// The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.