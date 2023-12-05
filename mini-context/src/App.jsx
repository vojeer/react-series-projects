import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Loign from './Component/Loign'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div >
        <h4 className='read-the-docs'>Hii every one ima enternal spirit</h4>
        <Loign/>&nbsp;
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
