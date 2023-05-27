var util = require('util.react')
class Icon extends require('react').Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        const self = this
        return (
            <div>
                {util.icon(self.props.prepend)}
                <div>
                    string: {util.icon(self.props.string)}
                    <br/>
                    element: {util.icon(self.props.element)}
                </div>
                {util.icon(self.props.append)}
            </div>
        )
    }
}
/*ONFACE-DEL*/Icon = require("react-hot-loader").hot(module)(Icon)
var node = (
    <Icon
        prepend="@icon-up"
        string="abc"
        element={(<em>em</em>)}
        append="@icon-down"
    />
)
require('react-dom').render(
    node,
    document.getElementById('icon-demo')
)
