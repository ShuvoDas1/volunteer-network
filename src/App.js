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

export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser]  = useState({
      name: '',
      email: '',
      photo: ''
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
          <Route path='/registration'>
            <Registration></Registration>
          </Route>
          <Route path='/login'>
            <Login></Login>
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
