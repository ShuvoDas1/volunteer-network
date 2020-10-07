import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App.js';

const Registration = () => {
  const { eventId } = useParams();
  const { register, handleSubmit, watch, errors } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [event, setEvent] = useState([])
  const history = useHistory();



  useEffect(() => {
    fetch('http://localhost:5000/event/' + eventId)
      .then(res => res.json())
      .then(data => setEvent(data))
  }, [])

  console.log(event);

  const onSubmit = (data, e) => {
    fetch('http://localhost:5000/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        alert('Registration successfully')
      })
    e.preventDefault();
    history.push('/myevents')

  }

  const style = {
    width: '500px',
    height: '500px',
    margin: 'auto',
    marginTop: '20px',
    border: '1px solid lightGray',
    padding: '30px'
  }

  return (
    <form style={style} onSubmit={handleSubmit(onSubmit)}>
      <input name="name" className='form-control' defaultValue={loggedInUser.name} ref={register({ required: true })}/>
      <br />
      <input name="email" className='form-control' defaultValue={loggedInUser.email} ref={register({ required: true })}/>
      <br />
      <input name="date" className='form-control' type='date' ref={register({ required: true })} />
      {errors.date && <span style={{ color: 'red' }}>This field is required</span>}
      <br />
      <input name="description" type='text' className='form-control' placeholder='description' ref={register({ required: true })} />
      {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
      <br />
      <input name="eventName" defaultValue={event.name} className='form-control' type='text' ref={register({ required: true })} />
      <br/>
      <input name="img" defaultValue={event.img} style={{display:"none"}} type='text' ref={register({ required: true })} />
      <input type="submit" className='form-control' />
    </form>
  );
};

export default Registration;