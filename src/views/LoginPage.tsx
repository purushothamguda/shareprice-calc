import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/LoginPage.scss"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const loginWithUsernameAndPassword = async (e: any) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(auth, 'loginpage auth object')
            navigate("/");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
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