import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/LoginPage.scss"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useAppDispatch } from '../redux/hooks'
import { setUser } from '../redux/userSlice'

interface FirebaseError extends Error {
    code: string;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };


    const loginWithUsernameAndPassword = async (e: any) => {
        e.preventDefault();

        if (!email || !password) {
            setNotice("Please enter both email and password.");
            setOpenSnackbar(true);
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(auth, 'loginpage auth object')
            const userData = {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName: userCredential.user.displayName,
                emailVerified: userCredential.user.emailVerified,
            };
            dispatch(setUser(userData));
            navigate("/");
        } catch (error) {
            const firebaseError = error as FirebaseError;
            switch (firebaseError.code) {
                case 'auth/invalid-email':
                    setNotice('Invalid email format.')
                    break;
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    setNotice('Invalid username or password.');
                    break;
                default:
                    setNotice("An error occured. Please try again")
            }
            setOpenSnackbar(true)

        }
    }

    return (
        <>
            <div>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity="error" // or "success" based on the context
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {notice}
                    </Alert>
                </Snackbar>
            </div>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div style={{ marginBottom: '20px' }}>
                        <Typography variant='h4'>Login</Typography>
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
                    <div className='buttonContainer'>
                        <Button variant="outlined" color='primary'>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => loginWithUsernameAndPassword(e)}
                        >
                            Login
                        </Button>
                    </div>
                    <p>
                        New user? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default LoginPage