import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';

const MyEvents = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [userEvent,setUserEvent] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/userevent?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUserEvent(data))
    },[])

    console.log(loggedInUser);
    return (
        <div>
            {
                userEvent.map(event => 
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{event.eventName}</Card.Title>
                  <Card.Text>
                        <h3>{event.date}</h3>
                  </Card.Text>
                  <Button variant="primary">Cancel</Button>
                </Card.Body>
              </Card>)
            }
        </div>
    );
};

export default MyEvents;