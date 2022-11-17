var spare = require('../index')
var assert = require('assert')
describe('basic.test.js', function() {
    it('should return ""', function() {
        var data = {
            a: 1,
            zero: 0,
            user: {
                name: 'nimo',
                // age: 12,
                child: {
                    judy: 'stupid'
                }
            }
        }
        assert.equal(
            spare(null, 'a'),
            null
        )
        assert.equal(
            spare(undefined, 'a'),
            'a'
        )
        assert.equal(
            spare(data.b, ''),
            ''
        )
        assert.equal(
            spare(data.a, ''),
            1
        )
        assert.equal(
            spare(data.a, 'abc'),
            1
        )
        assert.equal(
            spare(data.zero, 'abc'),
            0
        )
        assert.equal(
            spare(data.user.name, 'abc'),
            'nimo'
        )
        assert.equal(
            JSON.stringify(
                spare(data.user.child, '')
            ),
            '{"judy":"stupid"}'
        )
        assert.equal(
            spare(data, 'user.name', 'abc'),
            'nimo'
        )
        assert.equal(
            spare(data, 'user.child.some', 'abc'),
            'abc'
        )
        assert.equal(
            spare(data, 'user.some', 'defaultValue'),
            'defaultValue'
        )
    })
})
