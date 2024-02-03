import { TextField, Button, Snackbar, IconButton, Alert, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../styles/RegistrationPage.scss'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import CloseIcon from '@mui/icons-material/Close';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const signupWithUsernameAndPassword = async (e: any) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                setNotice("User Created Successfully");
                setOpen(true);
                resetFields();
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
                setOpen(true);
            }
        } else {
            setNotice("Passwords don't match. Please try again.");
            setOpen(true);
        }
    };

    const resetFields=()=>{
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    

    const handleCancel=()=>{
        resetFields();
    }

    return (
        <>
            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {notice}
                    </Alert>
                </Snackbar>
            </div>
            <div className='register-container'>

                <div className='register-form'>
                <div style={{marginBottom:'20px'}}>
                    <Typography variant='h4'>Sign Up</Typography>
                </div>  
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className='buttonContainer'>
                        <Button variant="outlined" className='cancelButton'
                        onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => signupWithUsernameAndPassword(e)}
                        >
                            Sign Up
                        </Button>

                    </div>
                    <div className="mt-3 text-center">
                        <span>Go back to login? <Link to="/">Click here.</Link></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RegistrationPage