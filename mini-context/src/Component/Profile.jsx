import React from 'react'
import { useContext } from 'react'
import userContext from '../Context/UserContext'

function Profile() {
    const { user } = useContext(userContext)

    if (!user) return <div>Please login</div>;
    return <div>Welcome {user.userName}</div>
}
export default Profile
