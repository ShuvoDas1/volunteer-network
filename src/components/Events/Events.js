import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Events.css'
const Events = (props) => {
    const id = props.id;
    const {name,img} = props.event;
    return (
            <div className='event'>
                <Link to='/registration'>
                    <Card>
                        <Card.Img variant="top"  src={img} />
                        <Card.Body>
                            <Card.Text>{name}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
    );
};

export default Events;