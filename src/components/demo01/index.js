import React, { Component } from 'react';

class arrayItem extends Component {

    render() {
        const name = ["Loading","Mils","JackJone"];
        return(
            <div>
                {name.map((item,index)=>{
                    return <span key={index}>{item}{' '}</span>
                })}
            </div>
        )
    }
}

export default arrayItem;