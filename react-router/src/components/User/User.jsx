import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userId} = useParams()
    return (
       <>
       <div className=' text-center text-3xl text-orange-400'>
        user: {userId}
       </div>
       </> 
    )
}

export default User
