var Mock = require('mockjs')
var { menus } = require('./datas')
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

    server.get('/role/:id', (req, res) => {
        const permissions = menus.map(item => {
            const opt = {
                'id': '@id',
                'title': '@ctitle(2, 8)',
                'describe': '@csentence(6, 18)',
                'parent': '@id',
            }
            return Object.assign({}, opt, item)
        })
        const data = Mock.mock({
            code: 200,
            result: {
                id: '@id',
                username: '@cname',
                'gender|1': ['male', 'female'],
                phone: '@natural(10000)',
                role: {
                    'title|1': ['root', 'admin', 'author', 'reader'],
                    describe: /[a-z]{6}[A-Z]{6}[0-9]{6}/,
                    permissions,
                },
            }
        })
        res.jsonp(data)
    })
}
