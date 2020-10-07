// import React from 'react';
// import eventsData from '../../eventData/eventData.js'
// const AddEvent = () => {


//     const  addFakeEventToDatabase = () => {
//         fetch('http://localhost:5000/addEvent',{
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(eventsData)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
//     }


//     return (
//         <div>
//             <h4>Add  Fake-Event to database</h4>
//             <button onClick={addFakeEventToDatabase}>Add Event</button>
//         </div>
//     );
// };

// export default AddEvent;