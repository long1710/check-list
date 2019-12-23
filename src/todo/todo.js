import React, {Component} from 'react';

class todo extends Component{
    render(){
        const {items} = this.props;
        const itemList = items.map(item => {
            return(
            <li className = "list-group-item d-flex justify-content-between" key = {item.id}>
                {item.milk} 
                <button class = "justify-content-end"onClick = {() => this.props.delete(item.id)}> x </button>
            </li>
            )
        });

        return (
            
            <ul className = "list-group">
                <li className ="list-group-item">list of item need to do</li>
                {itemList}
            </ul>
        )
    }
}
export default todo;