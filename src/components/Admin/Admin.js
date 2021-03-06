import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {

    const [allVolunteer,setAllVolunteer] = useState([]);

    useEffect(()=>{
        fetch('https://blooming-savannah-28111.herokuapp.com/allvolunteer')
        .then(res => res.json())
        .then(data=> setAllVolunteer(data))
    },[])

    const removeVolunteer = (id) => {
        console.log(id);
        fetch('https://blooming-savannah-28111.herokuapp.com/deletevolunteer/'+id,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Volunteer deleted successfully')
            }
        })
    }

    return (
        <div className='container'>
            <h3>Volunteer List</h3>
            <Link to='/addevent' className='ml-auto mr-3'>Add event</Link>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Register Date</th>
                        <th>Volunteer List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       allVolunteer.map(volunteer => 
                        <tr key={volunteer._id}>
                            <td>{volunteer.name}</td>
                            <td>{volunteer.email}</td>
                            <td>{volunteer.date}</td>
                            <td>{volunteer.eventName}</td>
                            <td><Button className='btn btn-danger' onClick={()=> removeVolunteer(volunteer._id)}>Delete</Button></td>
                         </tr>
                         
                        )
                      
                   }
                </tbody>
            </Table>
        </div>
    );
};

export default Admin;