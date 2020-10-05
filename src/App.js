import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddEvent from './components/AddEvent/AddEvent';
import MyEvents from './components/MyEvents/MyEvents';

export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser]  = useState({
      name: '',
      email: '',
      photo: '',
      isSignIn: false
  });
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h3>Email:{loggedInUser.email}</h3>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <PrivateRoute path='/registration/:eventId'>
            <Registration></Registration>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/addevent'>
            <AddEvent></AddEvent>
          </Route>
          <Route path='/myevents'>
              <MyEvents></MyEvents>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
