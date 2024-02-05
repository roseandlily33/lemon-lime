import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        addUser(state, action){
            console.log('State', state);
            console.log('Action', action, action.payload);

        }
    }
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;