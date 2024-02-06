import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Define the initial state using the `initialState` type
interface AuthState {
  isLoggedIn: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  loading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

  },
});

// Destructure and export the action creator
export const { setLoggedIn, setLoading } = authSlice.actions;

// Export the reducer as the default export of this file
export default authSlice.reducer;
