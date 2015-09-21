var fs = require('fs');

var contents = fs.readFileSync('package.json').toString();
console.log(contents);

fs.readFile('package.json', function (err, buff) {
    console.log(buff.toString());
});