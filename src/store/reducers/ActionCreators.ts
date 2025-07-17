import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import {userSlice} from './UserSlice'
import { createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSucces(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError((e as Error).message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(__, thunkAPI) => {
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch {
            return thunkAPI.rejectWithValue('Failed to load posts')
        }
        
    }
)