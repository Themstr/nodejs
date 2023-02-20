
var generator = require('generate-password');

var password = generator.generate({
    length: 120,
    numbers: true
});

console.log(password);