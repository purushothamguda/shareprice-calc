import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { auth, db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { UserState, setUser } from '../redux/userSlice';

const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user)

  useEffect(()=>{
    const fetchUserData = async () => {
      try {
        if (auth.currentUser) {
          const userDocRef = doc(db, 'users', auth.currentUser.uid )
          const userSnapshot = await getDoc(userDocRef);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data() as UserState;
            console.log(userData,'firestore db user dataaaaaaaaaaaaaaaaaaaaaaaaaa')
            dispatch(setUser(userData))
          } else {
            console.log('no user data found in firestore')
          }
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    }
    fetchUserData();
  }, [dispatch])

  return (
    <div>
      <p>Display Name:{user.displayName}</p>
      <p>Email:{user.email}</p>
      <p>UID:{user.uid}</p>

    </div>
  )
}

export default Profile