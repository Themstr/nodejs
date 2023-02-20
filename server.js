const http = require('http')


http.createServer(
    (req,res)=>{
        res.write('<h1>Hello node</h1>')
        res.end
    }
).listen(
    3000,
    console.log("server running in 3000")
)