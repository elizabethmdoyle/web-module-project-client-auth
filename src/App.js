import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import BrowserRouter from 'react-router-dom';

import Login from './components/Login';

import AddFriend from './components/AddFriend';

import FriendsList from './components/FriendsList';

// const Login = () => {
//   return(<h2>Login</h2>)
// }

// const AddFriend = () => {
//   return(<h2>AddFriend</h2>)
// }

// const FriendsList = () => {
//   return(<h2>FriendsList</h2>)
// }

function App() {
  return (
    <BrowserRouter>
    <Router>
    <div className="App">
      <h2>Client Auth Project</h2>
      <Login />
      <AddFriend />
      <FriendsList />
    
    </div>
    </Router>
    </BrowserRouter>
  );
}

export default App;
