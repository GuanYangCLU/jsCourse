const connect = require('connect'); 
 
const serveStatic = require('serve-static'); 
 
const app = connect(); 

app.use(serveStatic('static')); 

console.log('I am alive...');

app.listen(8080); 