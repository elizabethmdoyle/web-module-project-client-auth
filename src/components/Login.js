import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [cred, setCred] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        
        }) 
    }

    // console.log(cred)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
        .then(res => {
            // console.log(res)
            localStorage.setItem('token', res.data.token);
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="username">Username</label>
                    <input name="username" id="userbane" onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" onChange={handleChange}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login