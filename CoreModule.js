const fs = require('fs')


fs.readFile('./welcome.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
console.log("reading")