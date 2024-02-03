import React from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { Button } from '@mui/material';

const LogOut = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const logoutUser = async (e:any) => {
        e.preventDefault();
        await signOut(auth);
        console.log(auth,'logout')
        navigate("/");
    }

  return (
    <div>
        <Button onClick={(e)=>logoutUser(e)}>Logout</Button>
    </div>
  )
}

export default LogOut