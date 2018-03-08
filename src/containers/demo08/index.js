import React, { Component } from 'react';

class PropType extends Component {

    propTypes: {
        title: React.PropTypes.string.isRequired,
    }

    render() {
        return(
            <h3>
                {this.props.title}
            </h3>
        )
    }
}

export default PropType;