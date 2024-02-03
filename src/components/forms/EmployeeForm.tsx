import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

interface PersonalInfo {
    fullName: string;
    phoneNumber: string;
    email: string;
    currentAddress: string;
    permanentAddress: string;
    dateOfBirth: string;
    socialSecurityNumber: string;
    emergencyContactName: string;
    emergencyContactRelation: string;
    emergencyContactNumber: string;
}

const initialData = {
    fullName: '',
    phoneNumber: '',
    email: '',
    currentAddress: '',
    permanentAddress: '',
    dateOfBirth: '',
    socialSecurityNumber: '',
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactNumber: '',
}

const EmployeeForm = () => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfo({
            ...personalInfo,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        console.log(personalInfo, 'form data');
    }

    const handleCancel = () => {
        setPersonalInfo(initialData);
    }

    return (
        <div className='container'>
            <h1>Employee Details</h1>
            <Box sx={{flexGrow:1, padding:2}}>
                <h2>Personal Information:</h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label='Full Name'
                            name='fullName'
                            value={personalInfo.fullName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label='Phone Number'
                            name='phoneNumber'
                            value={personalInfo.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}sm={6}>
                        <TextField
                            label='Email'
                            name='email'
                            value={personalInfo.email}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <TextField
                            label='Current Address'
                            name='currentAddress'
                            value={personalInfo.currentAddress}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label='Permanent Address'
                            name='permanentAddress'
                            value={personalInfo.permanentAddress}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <TextField
                            label='Date of Birth'
                            value={personalInfo.dateOfBirth}
                            name='dateOfBirth'
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label='SSN'
                            value={personalInfo.socialSecurityNumber}
                            name='socialSecurityNumber'
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <TextField
                            label='Emergency Contact Number'
                            value={personalInfo.emergencyContactNumber}
                            name='emergencyContactNumber'
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <TextField
                            label='Emergency Contact Name'
                            value={personalInfo.emergencyContactName}
                            name='emergencyContactName'
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label='Emergency Contact Relation'
                            value={personalInfo.emergencyContactRelation}
                            name='emergencyContactRelation'
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    <Grid item xs={6} sm={6}>
                        <Button variant='outlined' color='secondary' onClick={handleCancel}>Cancel</Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>

                        <Button variant='contained' color='primary' onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default EmployeeForm