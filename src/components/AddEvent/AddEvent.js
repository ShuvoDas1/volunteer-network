import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddEvent.css'
const AddEvent = () => {

    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data,e) => {
        fetch('http://localhost:5000/addevent',{
            method:'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {})
        e.target.reset();
    }

    return (
            
            <form className='form'  onSubmit={handleSubmit(onSubmit)}>

                <label>Event Title</label>
                <input name="name" className='form-control'  ref={register} />
                {errors.name && <span style={{color:"red"}}>This field is required</span>}
                <br />
                <label>Event Date</label>
                <input name="date" type='date' className='form-control' ref={register({ required: true })} />
                {errors.date && <span style={{color:"red"}}>This field is required</span>}
                <br />
                <label>description</label>
                <textArea name="description" className='form-control' type='date' ref={register({ required: true })} />
                {errors.description && <span style={{color:"red"}}>This field is required</span>}
                <br />
                <label>Banner</label>
                <br/>
                <input name="img" type='file'  ref={register({ required: true })} />
                {errors.description && <span style={{color:"red"}}>This field is required</span>}
                <br />
                <input type="submit"   className='form-control btn btn-primary mt-4' />
            </form>
        
    );
};

export default AddEvent;