import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Event from './Event';

const MyEvents = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [userEvent,setUserEvent] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/userevent?email='+loggedInUser.email)
        .then(res => res.json())
        .then(result => {
            setUserEvent(result);
        })
    },[])


    return (
        <div>
            {
                userEvent.map(event => 
                <Row>
                    <Event event={event}></Event>
                </Row>
              )
            }
        </div>
    );
};

export default MyEvents;