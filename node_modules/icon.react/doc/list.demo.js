var iconData = require('../lib/data.js')
iconData.render(function (item) {
if (item.type === 'classify') {
    document.write(`<h2>${item.name}</h2>`)
}
else {
    document.write(`
        <span class="icon" >
            <span class="fi fi-${item.name}" ></span>
            <span class="icon-text">${item.name}</span>
        </span>
    `)
    if (item.o) {
        document.write(`
            <span class="icon" >
                <span class="fi fi-${item.name}-o" ></span>
                <span class="icon-text">${item.name}-o</span>
            </span>
        `)
    }
    if (item.of) {
        document.write(`
            <span class="icon" >
                <span class="fi fi-${item.name}-of" ></span>
                <span class="icon-text">${item.name}-of</span>
            </span>
        `)
    }
    if (item.f) {
        document.write(`
            <span class="icon" >
                <span class="fi fi-${item.name}-f" ></span>
                <span class="icon-text">${item.name}-f</span>
            </span>
        `)
    }
    if (item.s) {
        document.write(`
            <span class="icon" >
                <span class="fi fi-${item.name}-s" ></span>
                <span class="icon-text">${item.name}-s</span>
            </span>
        `)
    }
    if (item.sf) {
        document.write(`
            <span class="icon" >
                <span class="fi fi-${item.name}-sf" ></span>
                <span class="icon-text">${item.name}-sf</span>
            </span>
        `)
    }
}
})
