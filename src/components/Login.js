import React, {useState} from 'react';


const Login = () => {

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

    console.log(cred)


    return (
        <div>
            <h1>Login</h1>
            <form>
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