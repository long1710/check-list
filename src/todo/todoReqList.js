import React, { Component } from 'react';


class ItemRequirement extends Component {

    render(){
        const {list} = this.props
        const ListItem = list.pre.map(item => {
            return (
                <li>
                    {item}
                </li>
            )
        
        })
            return(
                <ul>
                    {ListItem}
                </ul>
            )
        
        
    }

}


export default ItemRequirement;