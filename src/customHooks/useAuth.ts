import { useState, useEffect } from 'react';
import { getIdToken, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAppDispatch } from '../redux/hooks';
import { setLoading, setLoggedIn } from '../redux/authSlice';
import { setUser } from '../redux/userSlice';

const useAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, 'useAuth.ts User details')
        // User is signed in
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        };
        dispatch(setUser(userData));
        dispatch(setLoggedIn(true));
        dispatch(setLoading(false));
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
        dispatch(setLoading(false));
        // localStorage.removeItem('idToken');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

};


export default useAuth;