import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
// Define the initial state using the `initialState` type
interface AuthState {
    isLoggedIn: boolean;
  }

const initialState:AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// Destructure and export the action creator
export const { setLoggedIn } = authSlice.actions;

// Export the reducer as the default export of this file
export default authSlice.reducer;
