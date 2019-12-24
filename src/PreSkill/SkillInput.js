import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class SkillInput extends Component {
    state = {
        milk: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSkill(this.state);
        this.setState({
            milk: ""
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} className = "mt-4">
                <Form.Control type="text" name="milk" onChange={this.handleChange} placeholder=" add skill" value={this.state.milk} />
                <Button size = "sm" variant = "primary" type="submit" className = "mt-3"> Submit </Button>
            </Form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        skill: state.item
    }
}

const mapAddToProps = (dispatch) => {
    return {
        addSkill: (value) => dispatch({ type: 'ADD_SKILL', value: value })
    }
}
export default connect(mapStateToProps, mapAddToProps)(SkillInput)