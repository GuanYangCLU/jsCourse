const connect = require('connect');

const servestatic = require('serve-static');

const app = connect();

app.use(servestatic('static'));

console.log('alive');

app.listen(8888);
