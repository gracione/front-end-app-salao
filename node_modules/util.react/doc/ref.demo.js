var util = require('util.react')
class Ref extends require('react').Component {
    constructor(props) {
        super(props)
    }
    render () {
        const ref = util.ref(this)
        const self = this
        return (
            <div ref={ref`root`}>
                <span ref={ref('span')} >a</span>
                <br/>
                <em
                    ref={function(node){
                        self.$refs = self.$refs || {}
                        self.$refs['em'] = node
                    }}
                >b</em>
                <br/>
                <button onClick={function () {
                    console.log('$refs', self.$refs)
                }} >click</button>
            </div>
        )
    }
}
/*ONFACE-DEL*/Ref = require("react-hot-loader").hot(module)(Ref)
require('react-dom').render(
    <Ref />,
    document.getElementById('ref-demo')
)
