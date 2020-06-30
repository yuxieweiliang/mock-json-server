var Mock = require('mockjs')
var Random = Mock.Random

module.exports = {

    userInfo: Mock.mock({
        'code': 200,
        'data|1-4': [{
            'uid|1000-9999': 1,
            'username': 'sufaith',
            'phone': '12345678910'
        }]
    }),

    selectData: Mock.mock({
        'code': 200,
        'data': {
            'id|1000-9999': 1,
            'username': 'sufaith',
            'phone': '12345678910'
        }
    })
}
