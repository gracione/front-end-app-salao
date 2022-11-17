var spare = require('../index')
var assert = require('assert')
describe('settings.test.js', function() {
    var defaultValue = {
        name: 'nimo',
        age: 24,
        child: {
            'xxx': {
                age: 0,
                name: 'xxx'
            }
        }
    }
    function testDefaultValueImmutable() {
        assert.equal(
            JSON.stringify(defaultValue)
            ,
            JSON.stringify({
                name: 'nimo',
                age: 24,
                child: {
                    'xxx': {
                        age: 0,
                        name: 'xxx'
                    }
                }
            })
        )
    }
    it('should only change name', function() {
        assert.equal(
            JSON.stringify(
                spare.settings(
                    defaultValue
                    ,
                    {
                        name: 'tim'
                    }
                )
            )
            ,
            JSON.stringify({
                name: 'tim',
                age: 24,
                child: {
                    'xxx': {
                        age: 0,
                        name: 'xxx'
                    }
                }
            })
        )
        testDefaultValueImmutable()

    })
    it('should only xxx age', function() {
        assert.equal(
            JSON.stringify(
                spare.settings(
                    defaultValue
                    ,
                    {
                        child: {
                            xxx: {
                                age: 1
                            }
                        }
                    }
                )
            )
            ,
            JSON.stringify({
                name: 'nimo',
                age: 24,
                child: {
                    'xxx': {
                        age: 1,
                        name: 'xxx'
                    }
                }
            })
        )
        testDefaultValueImmutable()

    })
    it('extend array', function () {
        assert.equal(
            JSON.stringify(
                spare.settings(
                    [1],
                    [2,3]
                )
            ),
            '[2,3]'
        )
        assert.equal(
            JSON.stringify(
                spare.settings(
                    [1],
                    []
                )
            ),
            '[1]'
        )
        assert.equal(
            JSON.stringify(
                spare.settings(
                    [1, [2]],
                    [undefined,[3]]
                )
            ),
            '[1,[3]]'
        )
        assert.equal(
            JSON.stringify(
                spare.settings(
                    [1, [2,10]],
                    [undefined,[3,4,5]]
                )
            ),
            '[1,[3,4,5]]'
        )
    })
})
