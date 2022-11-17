var extend = require("extend")
module.exports = function settings (defaultSettings, userSettings) {
    var empty
    if (Array.isArray(defaultSettings)) {
        empty = []
    }
    else {
        empty = {}
    }
    var copy = extend(true, empty, defaultSettings)
    return extend(true, copy, userSettings)
}
