import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserState {
  uid: string;
  email: string|null;
  displayName: string | null;
  emailVerified: boolean;
  // Add other user fields as needed
}

// Define the initial state using that type
const initialState: UserState = {
  uid: '',
  email: '',
  displayName: null,
  emailVerified: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      // Directly assign the user state from the payload
      return action.payload;
    },
    clearUser: () => initialState,
    // You can add more reducers here if you need to handle other actions
  },
});

// Export the actions
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
