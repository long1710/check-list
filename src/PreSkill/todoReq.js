import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

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

    handleOnClickAll = (e) => {//delete all inside item
        this.props.delItem(Number(e))
    }

    handleOnClickSingle = (e) => {//delete 1 pre of item only
        let preObject = { value: e, id: this.props.match.params.todo_id }
        this.props.delOne(preObject);
        
    }

    render() {
        const { pre } = this.props
        let prequirement = pre.filter(prequirement => {
            return prequirement.id.toString() === this.props.match.params.todo_id.toString()
        })
        if (prequirement.length === 0) { // check if any item is presence
            var ListPre = () => {
                return (
                    <div>
                        nothing is added yet
                    </div>
                )
            }

        }
        else {
            ListPre = prequirement[0].pre.map(prequirement => {//return the individual item 
                return (
                    <ListGroup.Item variant="success">
                        {prequirement}
                        <Button className="float-right" variant="secondary" onClick = {() => this.handleOnClickSingle(prequirement)}> x</Button>
                    </ListGroup.Item>
                )
            })
        }

        //return the form + inserted item
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="mb-4 mt-4" >
                    <input type="text" name="pre_req" onChange={this.handleChange} value={this.state.pre_req} placeholder='requirement to complete todo' />
                    <input type="submit" value="submit" />
                </form>

                <Card bg="info" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Recipe to complete item</Card.Title>
                        <ListGroup variant="flush">
                            {ListPre}
                            <Button className="float-right" variant="danger" onClick={() => this.handleOnClickAll(this.props.match.params.todo_id)}>clear this todo</Button>
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
        addPre: (value) => dispatch({ type: 'ADD_PRE', value: value }), //object as value
        delItem: (id) => dispatch({ type: 'DELETE_ITEM', id: id }),
        delOne: (pre) => dispatch({ type: 'DELETE_PRE', pre: pre })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Requirement);