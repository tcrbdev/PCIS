import express from 'express'
import httpProxy from 'http-proxy'
import socket_io from 'socket.io'
import config from '../config'

const PORT = config.serverPort
const app = express()
const targetUrl = `http://${config.host}:${config.apiPort}`
const proxy = httpProxy.createProxyServer({
    target: targetUrl
})

app.use('/api', (req, res) => {
    proxy.web(req, res, { target: `${targetUrl}/api` });
})

app.use((req, res) => {
    const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'>
      <title>Wiki!</title>
      <link src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link src="http://idiotwu.github.io/react-smooth-scrollbar/smooth-scrollbar.css"></link>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
    </head>
    <body>
      <div id='app'></div>
      <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src='http://127.0.0.1:8081/static/bundle.js'></script>
    </body>
  </html>
  `
    res.end(HTML)
})

const server = app.listen(PORT, error => {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> Listening on port ${PORT}.`)
    }
})

const io = socket_io(server)

io.on('connection', socket => {
    console.log("a user has connected to server")

    socket.on('register:users', (obj) => {
        console.log(obj)
        io.emit('register:users', obj)
    })
})
