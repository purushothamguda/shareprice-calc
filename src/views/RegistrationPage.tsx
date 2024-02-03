import { TextField, Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import '../styles/RegistrationPage.scss'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const signupWithUsernameAndPassword = async (e: any) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                setOpenSnackbar(true);
                navigate("/");
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    const handleOpenSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="User Created Successfully"
            />
            <div className='register-container'>
                <div className='register-form'>
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
                        <Button variant="outlined" className='cancelButton'>
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