import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <>
            <Navbar bg="light" variant="light" className='container'>
                <Navbar.Brand>
                    <img style={{ width: '80px', height: '50px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/addevent">Add-Event</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/myevents">{loggedInUser.name}</Nav.Link>
                    <Button variant="warning" className="ml-3">Admin</Button>
                </Nav>
                <br/>
            </Navbar>
            <div  className="bg-light container">
                <h3>I GREW BY HELPING PEOPLE IN NEED</h3>
                <br />
                <Form inline style={{marginLeft:'70px'}}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
            
        </>

    );
};

export default Header;