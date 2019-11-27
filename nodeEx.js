var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

//  Node.js File Server
// Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server. Let us combine the two, and serve the file requested by the client.

// // Create two html files and save them in the same folder as your node.js files.
// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:
// Remember to initiate the file:

// Initiate demo_fileserver.js:

// C:\Users\Your Name>node demo_fileserver.js
// If you have followed the same steps on your computer, you should see two different results when opening these two addresses:

// http://localhost:8080/mibelCal.html