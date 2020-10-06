import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import extraVolunteer from '../../logos/extraVolunteer.png'

const Event = (props) => {
    const { _id, name, date,eventName } = props.event;
    console.log(props.event);
    const history = useHistory();

    const handleDeleteEvent = () => {
        fetch('http://localhost:5000/delete/'+_id,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                 alert('event delete successfully');

            }
        })
        
    }

    return (
        <div>
            <Col md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={extraVolunteer} />
                    <Card.Body>
                        <Card.Title>{eventName}</Card.Title>
                        <Card.Text>
                            <strong>{date}</strong>
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary"  onClick={handleDeleteEvent}>Cancel</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Event;