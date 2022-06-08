import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/auth.api'

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
    "user/login", async (values, thunkAPI) => {
        const {email, password} = values
        try {
            const response = await authApi.login(email, password)
            return { user: response }
        } catch (error) {
            console.log({ error })
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk("user/logout", async() => {
    await authApi.logout()
})

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
        },
        [login.rejected]: (state, action) => {
            state.isLogin = false;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLogin = false;
            state.user = null;
        }
    }
})

export default loginSlice.reducer