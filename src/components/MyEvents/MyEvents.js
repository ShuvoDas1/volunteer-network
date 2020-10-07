import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import MyEvent from './MyEvent';
import './MyEvents.css'

const MyEvents = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userEvent, setUserEvent] = useState([]);

    useEffect(() => {
        fetch('https://blooming-savannah-28111.herokuapp.com/userevent?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(result => {
                setUserEvent(result);
            })

    }, [])


    return (
        <div className='container'>
            {
                userEvent.map(event =>

                    <MyEvent key={event._id} event={event}></MyEvent>

                )
            }
        </div>
    );
};

export default MyEvents;