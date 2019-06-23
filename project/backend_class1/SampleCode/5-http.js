const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
                                    if(req.method === 'GET') {
                                        console.log(`${req.method} ${req.url}`);
                                        switch(req.url) {
                                            case '/athome':
                                                res.writeHead(200, {'Content-Type': 'text/plain'});
                                                res.end('I am home');
                                                break;
                                            case '/home.html':
                                                res.writeHead(200, {'Content-Type': 'text/html'});
                                                res.end('<h1>I am home</h1>');
                                                break;
                                            case '/hello.txt':
                                                res.writeHead(200, {'Content-Type': 'text/plain'});
                                                fs.readFile('hello.txt', function(err, data) {
                                                            if (err) {
                                                                res.writeHead(500);
                                                                res.end('read error');
                                                            } else {
                                                                res.end(data);
                                                            }
                                                        });
                                                break;    
                                            /*case '/favicon.ico':
                                                fs.createReadStream('favicon.ico');
                                                fs.pipe(res); // this replaces the call to 'end'
                                                break;*/
                                            default:
                                                res.writeHead(404);
                                                res.end('not found');
                                        };
                                    } else {
                                        // other http methods are not supported!
                                        console.log(req.method + ' is not supported');
                                        res.end('not supported');
                                    }
    });

const port = 8888;
server.listen(port, function() {
                        // you can pass a callback to listen that lets you know
                        // the server has started
                        console.log(`server startd on port ${port}`);
                    }
            );