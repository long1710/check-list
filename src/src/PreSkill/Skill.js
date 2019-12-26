import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class Skill extends Component {
    handleOnClick = (e) => {
        this.props.delSkill(e)
    }
    render() {
        if(this.props.item !== undefined)
            var colorCheck = this.props.item.pre
        else colorCheck = [];
        const skill = this.props.skill;
        const SkillList = skill.map(Skill => {
           if (colorCheck.includes(Skill.milk)) {
                return (
                    <ListGroup.Item variant="success" key={Skill.id}>
                        {Skill.milk}
                        <Button bg = "primary" className="float-right" onClick={() => this.handleOnClick(Skill.id)}> x </Button>
                    </ListGroup.Item>
                )
            }
            else {
                return (
                    <ListGroup.Item key={Skill.id}>
                        {Skill.milk}
                        <Button bg = "primary" className="float-right" onClick={() => this.handleOnClick(Skill.id)}> x </Button>
                    </ListGroup.Item>
                )
            }
        });

        return (

            <ListGroup>
                <ListGroup.Item variant="primary" className="font-weight-bold"> list of skill acquired</ListGroup.Item>
                {SkillList}
            </ListGroup>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    if(ownProps.match.params.todo_id === undefined)
        var id = "N/A"
    else id = ownProps.match.params.todo_id
    return {
        skill: state.skill,
        item: state.item.find(item => { return item.id.toString() === id.toString() })
    }
}

const mapDeleteToProps = (dispatch) => {
    return {
        delSkill: (id) => dispatch({ type: 'DELETE_SKILL', id: id })
    }
}
export default connect(mapStateToProps, mapDeleteToProps)(Skill);