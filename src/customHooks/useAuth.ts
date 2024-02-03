import { useState, useEffect } from 'react';
import { getIdToken, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAppDispatch } from '../redux/hooks';
import { setLoggedIn } from '../redux/authSlice';

const useAuth = () => {
  const dispatch=useAppDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log(user,'useAuth.ts User details')
            // User is signed in
            dispatch(setLoggedIn(true));
  
            // getIdToken(user)
            // .then((idToken) => {
            //   // Save the ID token to localStorage
            //   localStorage.setItem('idToken', idToken);
            // })
            // .catch((error) => {
            //   // Handle any errors here
            //   console.error('Error getting ID token:', error);
            // });
            
          } else {
            // User is signed out
            dispatch(setLoggedIn(false));
            // localStorage.removeItem('idToken');
          }
        });
        
        // Cleanup subscription on unmount
        return () => unsubscribe();
      }, [dispatch]);

  };

  
  export default useAuth;