import { Button } from '@mui/material'
import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate=useNavigate();

  const logoutUser = async (e:any) => {
    e.preventDefault();
    await signOut(auth);
    console.log(auth,'logout')
    navigate("/login");
}

  return (
    <div className='home-container'>
      <h2>Home</h2>
      <div className='logout-button'>
        <Button variant='outlined' onClick={logoutUser}>Logout</Button>
      </div>
    </div>
  )
}

export default Home