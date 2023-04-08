import {createSlice} from '@reduxjs/toolkit';

export const filmSlice = createSlice({
    name: 'film',
    initialState: {},
    reducers: {
        // setUser: (state, action) => {
        //   state._id = action?.payload._id;
        //   state.firstName = action?.payload.firstName;
        //   state.lastName = action?.payload.lastName;
        //   state.email = action?.payload.email;
        //   state.type = action?.payload.type;
        // },
    },
});

// export const {setUser} = userSlice.actions;

export default filmSlice.reducer;
