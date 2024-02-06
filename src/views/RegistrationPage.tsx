import { TextField, Button, Snackbar, IconButton, Alert, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../styles/RegistrationPage.scss'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/firebase';
import CloseIcon from '@mui/icons-material/Close';
import { collection, addDoc } from 'firebase/firestore';
import { setUser } from '../redux/userSlice';
import { useAppDispatch } from '../redux/hooks';

interface FirebaseError extends Error {
    code: string;
}

const RegistrationPage = () => {
    const navigate = useNavigate();
    const dispatch=useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [displayName, setDisplayName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
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
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        //The function first checks if all fields are filled
        if (!email || !password || !confirmPassword) {
            setNotice("Please fill in all fields.");
            setOpen(true);
            return;
        }

        // Simple email validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setNotice("Please enter a valid email address.");
            setOpen(true);
            return;
        }

        // Strong password validation
        if (!hasUppercase || !hasLowercase || !hasNumbers || !hasSpecialChar || password.length < 8) {
            setNotice("Password must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters.");
            setOpen(true);
            return;
        }
        // Password and confirm password match validation
        if (password !== confirmPassword) {
            setNotice("Passwords do not match.");
            setOpen(true);
            return;
        }

        if (password === confirmPassword) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const usersCollection = collection(db, 'users');
                const userData = {
                    uid: userCredential.user.uid,
                    email: email,
                    displayName: displayName,
                    phoneNumber: phoneNumber,
                    emailVerified:false,
                    // ... other fields
                };
                await addDoc(usersCollection, userData);
                // dispatch(setUser(userData));
                setNotice("User Created Successfully");
                setOpen(true);
                resetFields();
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            } catch (error) {
                const firebaseError = error as FirebaseError;
                switch (firebaseError.code) {
                    case 'auth/email-already-in-use':
                        setNotice('The email address is already in use by another account.')
                        break;
                    case 'auth/invalid-email':
                        setNotice('The email address is not valid.')
                        break;
                    case 'auth/weak-password':
                        setNotice('The password is too weak.')
                        break;
                    default:
                        setNotice('Sorry, something went wrong. Please try again.')
                }
                setNotice("Sorry, something went wrong. Please try again.");
                setOpen(true);
            }
        } else {
            setNotice("Passwords don't match. Please try again.");
            setOpen(true);
        }
    };

    const resetFields = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }


    const handleCancel = () => {
        resetFields();
    }

    const PasswordHints = () => {
        return (
            <ul style={{ margin: '10px 0px', listStyle: 'inside' }}>
                <li>At least 8 characters</li>
                <li>At least one uppercase letter (A-Z)</li>
                <li>At least one lowercase letter (a-z)</li>
                <li>At least one number (0-9)</li>
                <li>At least one special character (!@#$%^&*)</li>
            </ul>
        );
    };


    return (
        <>
            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {notice}
                    </Alert>
                </Snackbar>
            </div>
            <div className='register-container'>

                <div className='register-form'>
                    <div style={{ marginBottom: '20px' }}>
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
                    <PasswordHints />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <TextField label="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                    <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
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