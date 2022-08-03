const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.end('welcome to my homepage')
    }
    if(req.url==="/about"){
        res.end('here is our history')
    }
    res.end(
        `<h1>oops! didn't work, we cant find page u're looking now</h1>
        <p>click here to return homepage</p>
        <a href="/">Homepage</a>
        `
    )
})
server.listen(500)