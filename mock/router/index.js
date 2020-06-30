var Mock = require('mockjs')
var Random = Mock.Random

module.exports = function (server) {
    server.get('/echo', (req, res) => {
        const data = Mock.mock({
            'code': 200,
            'results|10': [{
                'id': Mock.mock('@guid'),
                'title': /[a-z]{2}[A-Z]{2}[0-9]/,
                'ids2': '@string("lower", 5)',
                'username': Random.cname(),
                'phone': Random.natural(10000)
            }]
        })
        res.jsonp(data)
    })
    server.get('/echo/:id', (req, res) => {
        const data = Mock.mock({
            'code': 200,
            'results|10': [{
                'id': '@id',
                'title': '@ctitle(8, 16)',
                'string': /[a-z]{6}[A-Z]{6}[0-9]{6}/,
                'ids2': '@string("lower", 5)',
                'username': '@cname',
                'phone': '@natural(10000)'
            }]
        })
        res.jsonp(data)
    })
}
