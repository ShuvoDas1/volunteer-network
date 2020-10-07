import React, { useEffect, useState } from 'react';
import Events from '../Events/Events';
import './Home.css'
const Home = () => {
    const [events,setEvents] = useState([])
    useEffect(()=>{
       fetch('http://localhost:5000/events')
       .then(res => res.json())
       .then(data => setEvents(data))
    },[])
 
    return (
        <div className='container'>
            {
                events.map(event => <Events id={event._id} event={event}></Events>)
            }
        </div>
    );
};

export default Home;