import { Grid } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../redux/hooks'

const Profile = () => {
  const user = useAppSelector(state => state.user)
  return (
    <div>
      <p>Display Name:{user.displayName}</p>
      <p>Email:{user.email}</p>
      <p>Email Verified:{user.emailVerified}</p>
      <p>UID:{user.uid}</p>

    </div>
  )
}

export default Profile