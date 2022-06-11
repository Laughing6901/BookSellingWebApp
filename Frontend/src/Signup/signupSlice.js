import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/auth.api'

const initialState = {
    data: '',
    isRegister: false
}

export const register = createAsyncThunk(
    "user/register", async (values, thunkAPI) => {
        console.log({values})
        const {FirstName, LastName, Email, Password} = values
        try {
            const response = await authApi.register(FirstName, LastName, Email, Password)
            return response
        } catch (error) {
            console.log({ error })
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const registerSlice = createSlice({
    name: "authenRegister",
    initialState,
    reducers: {},
    extraReducers: {
        [register.pending]: (state, action) => {
            state.data = '';
            state.isRegister = false;
        },
        [register.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isRegister = true;
        },
        [register.rejected]: (state, action) => {
            state.data = '';
            state.isRegister = false;
        },
    }
})

export default registerSlice.reducer