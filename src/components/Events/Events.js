import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Events.css'
const Events = (props) => {
    const { name, img, _id } = props.event;
    return (
        <div className=''>
            <Row>  
                <Col md={4}>
                    <Link to={'/registration/' + _id}>
                        <Card style={{ width: '18rem',marginTop:'20px' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Text>{name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>    
            </Row>
        </div>
    );
};

export default Events;