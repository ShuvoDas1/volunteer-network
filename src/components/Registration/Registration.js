import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../../eventData/eventData.js'
import { useForm } from "react-hook-form";

const Registration = () => {
    const {eventId} = useParams(); 
    const event = eventsData.find(event => event.id == eventId)
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = (data) =>{

    }

    const style={
        width: '500px',
        height: '500px',
        margin: 'auto'
    }

    return (
        <form style={style} onSubmit={handleSubmit(onSubmit)}>
      <input name="name"  ref={register} />
        <br/>
      <input name="email" ref={register({ required: true })} />
        <br/>
        <input name="date" type='date' ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
        <input name="description" type='text' placeholder='description' ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
        <input name="event-name" type='text' ref={register({ required: true })} />
        <br/>
      <input type="submit" />
    </form>
    );
};

export default Registration;