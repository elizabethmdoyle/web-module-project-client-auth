import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Login from './components/Login';

import AddFriend from './components/AddFriend';

import FriendsList from './components/FriendsList';

import Logout from './components/Logout';

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
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to="/">Login</Link>
        <Link className="link" to="friendslist">Friends List</Link>
        <Link className="link" to="friends/add">Add Friend</Link>
        <Link className="link" to="logout">Logout</Link>


      </header>
     <Routes> 
      <Route path="/" element={ <Login />}/>
      <Route path="/friendsList" element={<FriendsList />}/>
      <Route path="/friends/add" element={<AddFriend />}/>
      <Route path="/logout" element={<Logout />}/>

      </Routes>
      </div>
    
  );
}

export default App;
