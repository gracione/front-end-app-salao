var util = require('util.react')
class Themes extends require('react').Component {
    render () {
        return (
            <div>
                <pre>{
                    util.themes({
                        themes: 'dark',
                        prefixClassName: 'm-box'
                    })
                }</pre>
                <pre>{
                    util.themes({
                        themes: 'dark big',
                        prefixClassName: 'm-box'
                    })
                }</pre>
                <pre>{
                    util.themes({
                        themes: 'dark big',
                        prefixClassName: 'm-box'
                    }, 'menu')
                }</pre>
            </div>
        )
    }
}
/*ONFACE-DEL*/Themes = require("react-hot-loader").hot(module)(Themes)
require('react-dom').render(
    <Themes />,
    document.getElementById('themes-demo')
)
