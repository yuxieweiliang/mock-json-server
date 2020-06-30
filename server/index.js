const jsonServer = require('json-server')
const db = require('../mock/db/index.js')
const routes = require('../mock/router/index.js')
const routesconfig = require('../mock/db/config.js')
const port = 3000

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const rewriter = jsonServer.rewriter(routesconfig)

server.use(middlewares)
routes(server)

// 将 POST 请求转为 GET
server.use((request, res, next) => {
    if (request.method === 'POST') {
        request.body.createdAt = Date.now()
    }
    request.method = 'GET'
    next()
})

server.use(rewriter) // 注意：rewriter 的设置一定要在 router 设置之前
server.use(router)

server.listen(port, () => {
    console.log('open mock server at localhost:' + port)
})
