import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../Context/UserContext'

function Loign() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState()
    const {setUser} = useContext(userContext)
    const handleSubmit = (e) => {
         e.preventDefault();
         setUser({userName , password})
    }
    return (
        <>
        <div>
            <h2>Login</h2>
            <input onChange={ (e) => setUserName(e.target.value)} value={userName} type="text" placeholder='username'/>  {' '} 
            <input  onChange={ (e) => setPassword(e.target.value)} value={password} type="password"  placeholder='enter password'/>
            <button onClick={handleSubmit}>submit</button>
        </div>
        </>
    )
}

export default Loign
