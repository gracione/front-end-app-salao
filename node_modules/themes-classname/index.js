module.exports = function themesClassName (props, subClassName) {
    // forward compatible themesClassName(props, '-mask')
    subClassName = subClassName || ''
    if (subClassName) {
        subClassName = '-' + subClassName
    }
    var themes = props.themes
    var prefixClassName = props.prefixClassName
    // get array
    themes = themes.trim().replace(/\s+/g, ' ').split(' ')
    // add prefixClassName
    themes = themes.filter(function(theme) {
        if (theme) {
            return true
        }
    }).map(function (theme){
        return prefixClassName + subClassName + '--themes-' + theme
    })
    return themes.join(' ')
}
