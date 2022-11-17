var util = require('util.react')
class Contains extends require('react').Component {
    constructor(props) {
        super(props)
        this.state = {
            contains: ''
        }
    }
    render () {
        const self = this
        var click = function (e) {
            self.setState({
                contains: util.contains(self.refs.root, e.target)
            })
        }
        return (
            <div>
                <h2>contains: {JSON.stringify(self.state.contains)}</h2>
                <div ref="root" style={{border: '1px solid red'}} >
                    <div>
                        <button onClick={click} ref="some">some</button>
                    </div>
                </div>
                <button onClick={click} ref="abc">abc</button>
            </div>
        )
    }
}
/*ONFACE-DEL*/Contains = require("react-hot-loader").hot(module)(Contains)
require('react-dom').render(
    <Contains />,
    document.getElementById('contains-demo')
)
