const http = require('http');

// req = incoming requests
// res = what sending back
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to out home page')
    }
    if (req.url === '/about'){
        res.end('Here is our about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(1000)