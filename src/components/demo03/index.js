import React, { Component } from 'react';

class NoteList extends Component {

    render() {
        return(
            <ol>
                {
                    React.Children.map(this.props.children,(child) => {
                        return <li>{child}</li>
                    })
                }
            </ol>
        )
    }
}

export default NoteList;