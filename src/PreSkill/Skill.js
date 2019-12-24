import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Skill extends Component {
    handleOnClick = (e) => {
        this.props.delSkill(e)
    }
    render() {
        const skill = this.props.skill;
        const SkillList = skill.map(Skill => {
            return (
                <li className="list-group-item d-flex justify-content-between" key={Skill.id}>
                    {Skill.milk}
                    <button className="justify-content-end" onClick={() => this.handleOnClick(Skill.id)}> x </button>
                </li>
            )
        });

        return (

            <ul className="list-group">
                <li className="list-group-item">list of skill acquired</li>
                {SkillList}
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        skill: state.skill
    }
}

const mapDeleteToProps = (dispatch) => {
    return {
        delSkill: (id) => dispatch({ type: 'DELETE_SKILL', id: id })
    }
}
export default connect(mapStateToProps, mapDeleteToProps)(Skill);