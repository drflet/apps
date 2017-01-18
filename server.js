var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;

console.log(page);
res.writeHead(200, {"Content-Type": "text/plain"});
if (page == '/') {
res.write('You\'re at the reception desk. How can I help you?');
}
else if (page == '/basement') {
res.write('You\'re in the wine cellar. These bottles are mine!');
}
else if (page == '/floor/1/bedroom') {
res.write('Hey, this is a private area!');
}
else {
	res.writeHead(404);
	res.write('404. There\'s nothing here for you to see.');
}
res.end();
});
server.listen(8080);