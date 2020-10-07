import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import MyEvent from './MyEvent';
import  './MyEvents.css'

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
        <div className='container'>
            {
                userEvent.map(event => 
                <Row>
                    <MyEvent key={event._id} event={event}></MyEvent>
                </Row>
              )
            }
        </div>
    );
};

export default MyEvents;