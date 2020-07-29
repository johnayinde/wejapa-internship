
const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.writeHead(201, { 'Content-Type': 'application/json' });
Cres.write(JSON.stringify({ success: true, message: ' resource has been created' })); 
res.end();
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
