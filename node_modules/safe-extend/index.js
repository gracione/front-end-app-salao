var extend = require('extend')
module.exports = function safeExtend () {
    var arg = Array.from(arguments).map(function (item) {
        var cloneItem
        // object and array
        if(typeof item === 'object') {
            if (Array.isArray(item)) {
                cloneItem = extend(true, [], item)
            }
            else {
                cloneItem = extend(true, {}, item)
            }
        }
        return cloneItem? cloneItem: item
    })
    return extend.apply(undefined, arg)
}
module.exports.clone = function clone(target) {
    if (typeof target === 'object' && target !== null) {
      if (Array.isArray(target)) {
          return extend(true, [], target)
      }
      return extend(true, {}, target)
    }
    else {
      return target
    }
}
