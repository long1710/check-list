import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Req from './todoReqList';

class todo extends Component {


    render() {

        const item = this.props.item;
        const itemList = item.map(item => {
            return (
                <Card>
                    <Card.Header>
                        <Link to={'/todo/' + item.id}>
                            <Accordion.Toggle as={Button} variant="link" eventKey= {item.id}>
                                {item.milk}
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
                    <Card bg = "primary" text = "white">
                        <Card.Header>
                            list of things need to do
                        </Card.Header>
                    </Card>
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


export default connect(mapStateToProps)(todo);