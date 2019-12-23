import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemInput extends Component{
    state = {
        milk: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            milk: ""
        })
    }
    render(){
        return (
        <form onSubmit = {this.handleSubmit}> 
        <input type = "text" name = "milk" onChange={this.handleChange} placeholder = "name" value = {this.state.milk}/>
        <input type = "submit" value = "submit" />
        </form>
        )
    }
}

    
export default ItemInput