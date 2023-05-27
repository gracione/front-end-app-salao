function hasValue(value, yes, no) {
    if (typeof value === 'undefined') {
        if (typeof no === 'function') {
            no()
        }
        else {
            return typeof no === 'undefined'? false: no
        }
    }
    else {
        if (typeof yes === 'function') {
            yes()
        }
        else {
            return typeof yes === 'undefined'? true: yes
        }
    }
}
var spare = function spare () {
    var throwError = function () {
        throw new Error('node_modules/spare/index.js: You should use `spare(data, defaultValue)` or `spare(data, attr, defaultValue)`\r\n The use of the error: spare(' + Array.from(arguments).join(', ') + ')')
    }
    var data = arguments[0]
    var attr
    var defaultValue
    switch(arguments.length) {
        case 0:
            throwError()
        break
        case 1:
            throwError()
        break
        case 2:
            attr = undefined
            defaultValue = arguments[1]
        break
        case 3:
            attr = arguments[1]
            defaultValue = arguments[2]
        break
        default:
            throwError()

    }
    var attrArray
    var output
    if (attr) {
        attrArray = attr.split('.')
        var findUndefinedObj = attrArray.some(function (key, index) {
            if (!hasValue(data[key])) {
                return true
            }
            data = typeof data[key] === 'undefined'? {}: data[key]
        })
        if (findUndefinedObj) {
            output = defaultValue
        }
    }
    if (hasValue(output)) {
        return output
    }
    return hasValue(data, data, defaultValue)
}
spare.settings = require('./settings')
module.exports = spare
