import React, { useEffect, useState } from 'react';
import eventsData from '../../eventData/eventData.js'
import Events from '../Events/Events';
import './Home.css'
const Home = () => {
    const [events,setEvents] = useState([])
    useEffect(()=>{
        setEvents(eventsData);
    },[])
    return (
        <div className='container'>
            {
                events.map(event => <Events id={event.id} event={event}></Events>)
            }
        </div>
    );
};

export default Home;