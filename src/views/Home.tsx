import { Button } from '@mui/material'
import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate=useNavigate();


  return (
    <div className='home-container'>
      <h2>Home</h2>
    </div>
  )
}

export default Home