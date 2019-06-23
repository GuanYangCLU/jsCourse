const fs = require('fs');
const path = require('path');

// async read without decode
fs.readFile(path.join(__dirname, 'hello.txt'), function(err, data) {
    if(err) {
        console.log('-------');
        console.error('Error reading file.');
        console.log('-------');
    } else {
        console.log('-------');
        console.log('type of data is ' + typeof data);
        console.log('Read file contents (raw):');
        console.log(data);
        console.log('-------');
    }
});

console.log('\n\n');
/*
// async read with decode
fs.readFile(path.join(__dirname, 'hello.txt'),
    { encoding: 'utf8' }, function(err, data) {
        if(err) {
            console.log('-------');
            console.error('Error reading file.');
            console.log('-------');
        } else {
            console.log('-------');
            console.log('type of data is ' + typeof data);
            console.log('Read file contents (decoded):');
            console.log(data);
            console.log('-------');
        }
});

// async read with decode with error
fs.readFile(path.join(__dirname, '1hello.txt'),
    { encoding: 'utf8' }, function(err, data) {
        if(err) {
            console.log('-------');
            console.error('Error reading file.');
            console.log('-------');
        } else {
            console.log('-------');
            console.log('type of data is ' + typeof data);
            console.log('Read file contents:');
            console.log(data);
            console.log('-------');
        }
});

// sync read
const data1 = fs.readFileSync(path.join(__dirname, 'hello.txt'),
{ encoding: 'utf8' });
console.log('-------');
console.log('type of data1 is ' + typeof data1);
console.log('Read file contents (decoded):');
console.log(data1);
console.log('-------');

// read directory
fs.readdir(__dirname, function(err, files) {
    if(err) {
        console.log('-------');
        console.error('Unable to read directory contents');
        console.log('-------');
    } else {
        console.log('-------');
        console.log(`Contents of ${__dirname}:`);
        console.log(files.map(f => '\t' + f).join('\n'));
        console.log('-------');
    }
});
*/

