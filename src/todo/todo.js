import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Req from './todoReqList';

class todo extends Component {

    handleOnClick = (e) => {
        this.props.delItem(e)
    }

    render() {

        const item = this.props.item;
        const itemList = item.map(item => {
            return (
                <Card>
                    <Card.Header>
                        <Link to={'/todo/' + item.id}>
                            <Accordion.Toggle as={Button} variant="link" eventKey= {item.id}>
                                {item.milk}
                                <button className="justify-content-end" onClick={() => this.handleOnClick(item.id)}> x </button>
                            </Accordion.Toggle>
                        </Link>
                    </Card.Header>

                    <Accordion.Collapse eventKey = {item.id}>
                        <Card.Body><Req list = {item}></Req> </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )
        });

        return (
            <div>
                <Accordion>

                    {itemList}
                </Accordion>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.item
    }
}

const mapDeleteToProps = (dispatch) => {
    return {
        delItem: (id) => dispatch({ type: 'DELETE_ITEM', id: id })
    }
}

export default connect(mapStateToProps, mapDeleteToProps)(todo);