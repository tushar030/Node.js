var http = require('http');

function onRequest(request, response) {
	console.log("a user made a request" + request.url);
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("This is a Demo Response");
	response.end();
}


http.createServer(onRequest).listen(8080);
console.log("Server is now running....");