import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropType extends Component {

    // Warning: propTypes was defined as an instance property on PropType. 
    // Use a static property to define propTypes instead.
    // 这里定义propTypes 会有错误提示,应该在render之后 单独定义 

    propTypes = {
        title: PropTypes.number.isRequired
    }

    render() {
        return(
            <h3>
                {this.props.title}
            </h3>
        )
    }
}

PropType.propTypes = {
    title: PropTypes.number.isRequired
}

export default PropType;