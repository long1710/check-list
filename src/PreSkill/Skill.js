import React, {Component} from 'react';

class Skill extends Component{
    render(){
        const {skill} = this.props;
        const SkillList = skill.map(Skill => {
            return(
            <li className = "list-group-item d-flex justify-content-between" key = {Skill.id}>
                {Skill.milk} 
                <button class = "justify-content-end"onClick = {() => this.props.delete(Skill.id)}> x </button>
            </li>
            )
        });

        return (
            
            <ul className = "list-group">
                <li className ="list-group-item">list of skill need to do</li>
                {SkillList}
            </ul>
        )
    }
}
export default Skill;