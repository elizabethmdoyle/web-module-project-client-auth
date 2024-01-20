import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AddFriend = () => {

    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    const navigate = useNavigate();


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        
        }) 
    }
    console.log(form)

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends',form, {
            headers: { authorization: token}
        })
            .then(res => {
                // console.log(res)
                navigate('/friends/add')
            })
            .catch(err => {
                console.log(err)
            })
    }
    



    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input name="age" id="age" onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email" onChange={handleChange}></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend