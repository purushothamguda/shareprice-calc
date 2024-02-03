import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/LoginPage.scss"

const LoginPage = () => {
    return (
        <div className='loginContainer'>
            <div className='loginForm'>
                <TextField label="Username" />
                <TextField label="Password" type="password" />
                <div className='buttonContainer'>
                    <Button variant="outlined" color='primary'>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </div>
                <p>
                    New user? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage