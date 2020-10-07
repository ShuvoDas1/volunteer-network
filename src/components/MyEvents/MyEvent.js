import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


const MyEvent = (props) => {
    const { _id, name, date,eventName,img } = props.event;

    const removeItem = (id) => {
        fetch('https://blooming-savannah-28111.herokuapp.com/delete/'+id,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result){
                 alert('event delete successfully');
                
            }
        })
        
    }


    return (
        <div>
            <Row>
            <Col md={3}>
                <Card style={{ width: '18rem', marginTop:'5px' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{eventName}</Card.Title>
                        <Card.Text>
                            <strong>{date}</strong>
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary"  onClick={()=>removeItem(_id)}>Cancel</Button>
                </Card>
            </Col>
            </Row>
        </div>
    );
};

export default MyEvent;