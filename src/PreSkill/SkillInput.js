import React, {Component} from 'react';

class SkillInput extends Component{
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
        this.props.addSkill(this.state);
        this.setState({
            milk: ""
        })
    }
    render(){
        return (
        <form onSubmit = {this.handleSubmit}> 
        <input type = "text" name = "milk" onChange={this.handleChange} placeholder = "skill" value = {this.state.milk}/>
        <input type = "submit" value = "submit" />
        </form>
        )
    }
}
export default SkillInput