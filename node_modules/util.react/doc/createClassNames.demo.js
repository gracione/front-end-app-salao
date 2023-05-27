var util = require('util.react')
class CreateClassNames extends require('react').Component {
    constructor(props) {
        super(props)
        this.state = { switch: true }
    }
    render () {
        const self = this
        const classNames = util.createClassNames(self.props)
        // or
        // const classNames = util.createClassNames(self.props.prefixClassName)
        return (
            <div>
                <pre>{classNames({'hd': self.state.switch })}</pre>
                <pre>{classNames({
                    'hd-title': self.state.switch,
                    'hd-title--on': self.state.switch
                })}</pre>
                <hr />
                <button
                    onClick={() => {
                        self.setState({
                            switch: !self.state.switch
                        })
                    }}
                >switch</button>
            </div>
        )
    }
}
CreateClassNames.defaultProps = {
    prefixClassName: 'm-box'
}
/*ONFACE-DEL*/CreateClassNames = require("react-hot-loader").hot(module)(CreateClassNames)
require('react-dom').render(
    <CreateClassNames />,
    document.getElementById('create-classnames-demo')
)
