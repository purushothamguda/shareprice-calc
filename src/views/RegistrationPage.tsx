import { TextField, Button } from '@mui/material'
import React from 'react'

const RegistrationPage = () => {
    return (
        <div>
            <TextField label="Username" />
            <TextField label="Email" />
            <TextField label="Password" type="password" />
            <TextField label="Confirm Password" type="password" />
            <Button variant="contained" color="primary">
                Register
            </Button>
        </div>
    )
}

export default RegistrationPage