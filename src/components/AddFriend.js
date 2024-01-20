import React, {useState} from 'react';


const AddFriend = () => {

    const [cred, setCred] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        
        }) 
    }
    // console.log(cred)

    return (
        <div>
            <h2>Add Friend</h2>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" onChange={handleChange}></input>
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