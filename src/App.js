import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Login from './components/Login';

import AddFriend from './components/AddFriend';

import FriendsList from './components/FriendsList';

// const Login = () => {
//   return(<h2>Login</h2>)
// }

// const AddFriend = () => {
//   return(<h2>AddFriend</h2>)5
// }

// const FriendsList = () => {
//   return(<h2>FriendsList</h2>)
// }

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <ul>
      <li>
          <Link to="/">Login</Link>
        </li> 
        <li>
          <Link to="/friendsList">FriendsList</Link>
        </li>
        <li>
          <Link to="/friends/add">Add Friend</Link>
        </li>
      </ul>
      <Route path="/" element={ <Login />}/>
      <Route path="/friendsList" element={<FriendsList />}/>
      <Route path="/friends/add" element={<AddFriend />}/>

      </div>
    
  );
}

export default App;
