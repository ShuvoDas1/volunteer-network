import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();

    const handleAdmin = () => {
        history.push('/admin')
    }

    return (
    
            <Navbar bg="light" variant="light" className='container'>
                <Navbar.Brand>
                    <img style={{ width: '80px', height: '50px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    {/* <Nav.Link href="/addevent">Add-Event</Nav.Link> */}
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/myevents">{loggedInUser.name}</Nav.Link>
                    <Button onClick={handleAdmin} variant="warning" className="ml-3">Admin</Button>
                </Nav>
                <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-1 ml-3" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>

    );
};

export default Header;