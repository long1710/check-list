import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class ItemRequirement extends Component {

    render(){
        const {list} = this.props
        const ListItem = list.pre.map(item => {
            return (
                <ListGroup.Item>
                    {item}
                </ListGroup.Item>
            )
        
        })
            return(
                <ListGroup>
                    {ListItem}
                </ListGroup>
            )
        
        
    }

}


export default ItemRequirement;