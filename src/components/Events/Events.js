import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Events.css'
const Events = (props) => {
    // const id = props.id;
    const { name, img, _id } = props.event;
    return (
        <div className='box container'>
            <Row>
                <Col></Col>
                <Col>
                    <Link to={'/registration/' + _id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Text>{name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default Events;