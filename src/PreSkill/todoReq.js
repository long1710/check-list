import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Requirement extends Component {
    state = {
        pre_req: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let preObject = { value: this.state.pre_req, id: this.props.match.params.todo_id }
        this.props.addPre(preObject)
        this.setState({
            pre_req: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { pre } = this.props
        let prequirement = pre.filter(prequirement => {
            return prequirement.id.toString() === this.props.match.params.todo_id.toString()
        })
        if (prequirement.length === 0) {
            var ListPre = () => {
                return (
                    <div>
                        nothing is added yet
                    </div>
                )
            }

        }
        else {
            var ListPre = prequirement[0].pre.map(prequirement => {
                return (
                    <ListGroup.Item>
                        {prequirement}
                    </ListGroup.Item>
                )
            })
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" name="pre_req" onChange={this.handleChange} value={this.state.pre_req} placeholder='requirement to complete todo' />
                    <input type="submit" value="submit" />
                </form>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Recipe to complete item</Card.Title>
                        <ListGroup variant="flush">
                            {ListPre}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => { //placebo for when want to deal with params
    let id = ownProps.match.params.todo_id;
    return {
        id: state.item.find(item => item.id === id),
        pre: state.item//item for card of requirement 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPre: (value) => dispatch({ type: 'ADD_PRE', value: value }) //object as value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Requirement);