const fs = require('fs');
// async write
fs.writeFile('hello.txt', '3/6/19 - hello from Node!\nI am here\nAnother line', function(err) {
        if(err) {
            console.log('-------');
            console.log('Error writing to file.');
            console.log('-------');
        } else {
            console.log('-------');
            console.log('1. writing to file is successful.');
            console.log('-------');
        }
    }
);
console.log("1");
/*
// async write with __dirname
fs.writeFile(__dirname + '/hello1.txt', 'another hello from Node!\nI am here\nAnother line', function(err) {
        if(err) {
            console.log('-------');
            console.log('Error writing to file.');
            console.log('-------');
        } else {
            console.log('-------');
            console.log('2. writing to file is successful.');
            console.log('-------');
        }
    }
);

// sync write
try {
    console.log("1");
    fs.writeFileSync(__dirname + '/hello.txt', 'hello from Node!');
    console.log('-------');
    console.log('3. sync write successful');
    console.log('-------');
} catch(err) {
    console.log('-------');
    console.error('Error writing file.');
    console.error(err);
    console.log('-------');
}
*/
