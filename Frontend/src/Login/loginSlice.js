import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authService } from '../utils/Auth'
import { setMessage } from '../utils/messageSlice'

const user = JSON.parse(localStorage.getItem("user"))
const initialState = user ?
    {
        data: user,
        isLogin: false
    }
    :
    {
        data: null,
        isLogin: false
    }
export const login = createAsyncThunk(
    "user/login", async ({ username, password }, thunkAPI) => {
        try {
            const response = await authService.login(username, password);
            return { user: response }
        } catch (error) {
            thunkAPI.dispatch(setMessage(error))
            return thunkAPI.rejectWithValue()
        }
    }
)

const loginSlice = createSlice({
    name: "authen",
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state, action) => {
            state.isLogin = false
        },
        [login.fulfilled]: (state, action) => {
            state.isLogin = true;
            state.user = action.payload.user
            console.log(state.isLogin)
        },
        [login.rejected]: (state, action) => {
            state.isLogin = false;
            console.log(state.isLogin)
        }
    }
})

export default loginSlice.reducer