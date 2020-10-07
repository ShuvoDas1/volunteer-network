import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Admin = () => {

    const [allVolunteer,setAllVolunteer] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allvolunteer')
        .then(res => res.json())
        .then(data=> setAllVolunteer(data))
    },[])
    console.log(allVolunteer)
    return (
        <div className='container'>
            <h3>Volunteer List</h3>
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
                        <tr>
                            <td>{volunteer.name}</td>
                            <td>{volunteer.email}</td>
                            <td>{volunteer.date}</td>
                            <td>{volunteer.eventName}</td>
                            <td><Button className='btn btn-danger'>Delete</Button></td>
                         </tr>
                         
                        )
                      
                   }
                </tbody>
            </Table>
        </div>
    );
};

export default Admin;