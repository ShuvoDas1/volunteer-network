import React, { useEffect, useState } from 'react';
import Events from '../Events/Events';
import './Home.css'
const Home = () => {
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        fetch('https://blooming-savannah-28111.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className='container'>
            {
                events.map(event => <Events key={event._id} event={event}></Events>)
            }
        </div>
    );
};

export default Home;