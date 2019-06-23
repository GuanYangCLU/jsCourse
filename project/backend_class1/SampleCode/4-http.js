const http = require('http');

const server = http.createServer(
						function(req, res) {
                            res.end("Hello World!");
                            //console.log(`${req.method} ${req.url}`);
                            //res.end('Hello World! '+ `${req.method} ${req.url}`);
                        }
               );

const port = 8888;
server.listen(port, function() {
                        // you can pass a callback to listen that lets you know
                        // the server has started
                        console.log(`server startd on port ${port}`);
                    }
            );