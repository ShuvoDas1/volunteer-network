import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import extraVolunteer from '../../logos/extraVolunteer.png'

const MyEvent = (props) => {
    const { _id, name, date,eventName,img } = props.event;
    console.log(props.event);
    const history = useHistory();

    // const [userEvent,setUserEvent] = useState([]);
    
    // useEffect(()=>{
    //     fetch('http://localhost:5000/userevent?email='+loggedInUser.email)
    //     .then(res => res.json())
    //     .then(result => {
    //         setUserEvent(result);
    //     })
    // },[])

    const removeItem = (_id) => {
        console.log(_id);
        fetch('http://localhost:5000/delete/'+_id,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result){
                 alert('event delete successfully');
                
            }
        })
        
    }

    

    return (
        <div>
            <Col md={3}>
                <Card style={{ width: '18rem', marginTop:'5px' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{eventName}</Card.Title>
                        <Card.Text>
                            <strong>{date}</strong>
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary"  onClick={()=>removeItem(_id)}>Cancel</Button>
                </Card>
            </Col>
        </div>
    );
};

export default MyEvent;